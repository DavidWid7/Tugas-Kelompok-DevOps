import express from 'express';
import session from 'express-session';
import { checkLoggedin, checkLoggedinAdmin } from './controllers/check.js';
import { createServer } from 'http';
import { Server } from 'socket.io';

// Router
import root_routes from './router/root.js';
import auth_routes from './router/auth.js';
import user_routes from './router/user/user.js';
import pemesanan_routes from './router/user/pemesanan.js';
import admin_routes from './router/admin/admin.js';

// Utils
import formatMessage from './utils/messages.js';
import {userJoin, getCurrentUser, userLeave, getRoomUsers} from './utils/users.js'

const app = express();
const http = createServer(app);
const io = new Server(http, { cors : { origin : '*' }});

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}));

app.use('/', root_routes);
app.use('/auth', auth_routes);
app.use('/', checkLoggedin, user_routes);
app.use('/pemesanan', pemesanan_routes);
app.use('/admin', checkLoggedinAdmin, admin_routes);

app.get('*', (req,res)=>{
	res.render('404')
});

http.listen(3000, () => {
    console.log(`Server running at port 3000`);
})

io.on('connection', socket => {
    socket.on('joinRoom', ({ username, admin }) => {
        const user = userJoin(socket.id, username, admin);
        let banyakorg = getRoomUsers(user.admin).length;
        let adminada = false
        if(banyakorg < 3 ){
            for (let i = 0; i < banyakorg; i++) {
                if(getRoomUsers(user.admin)[i]['username'] == 'admin')
                    adminada = true
            }
            if(adminada == false && banyakorg == 2){
                socket.emit('message', formatMessage('Bot', 'Welcome to Launderland'));
                socket.emit('message', formatMessage('Bot', `Mohon Maaf, ${admin} sedang melayani customer lain`));         
            }else{
                socket.join(user.admin);
                socket.emit('message', formatMessage('Bot', 'Welcome to Launderland'));
                socket.emit('message', formatMessage('Bot', `Mohon Menunggu, ${admin} akan segera membalas`));
                socket.broadcast.to(user.admin).emit('message', formatMessage('Bot', `${username} has joined the chat`));
            }
        } 
        else{
            socket.emit('message', formatMessage('Bot', 'Welcome to Launderland'));
            socket.emit('message', formatMessage('Bot', `Mohon Maaf, ${admin} sedang melayani customer lain`));
        }
        io.to(user.admin).emit('roomUsers', {
            admin: user.admin,
            users: getRoomUsers(user.admin)
        });
    });

    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);
        let banyakorg = getRoomUsers(user.admin).length;
        if(getRoomUsers(user.admin)[0] == getCurrentUser(socket.id) || getRoomUsers(user.admin)[1] == getCurrentUser(socket.id))
            if(getRoomUsers(user.admin).indexOf(user) < 2)
                if(banyakorg == 2)
                    if((getRoomUsers(user.admin)[0]['username']=='admin' && getRoomUsers(user.admin)[1]['username']!='admin') 
                    || (getRoomUsers(user.admin)[1]['username']=='admin' && getRoomUsers(user.admin)[0]['username']!='admin'))
                        io.to(user.admin).emit('message', formatMessage(user.username, msg));
                else if(banyakorg == 1)
                    io.to(user.admin).emit('message', formatMessage(user.username, msg)); 
    });

    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.admin).emit('roomUsers', {
                admin: user.admin,
                users: getRoomUsers(user.admin)
            });
        }
    });
});
