import express from 'express';
import {Account, Op} from '../models/accounts.js';
import account_controller from "../controllers/accounts.js";
import bcrypt from 'bcrypt';

const router = express.Router();
router.use(express.static('public'));

router.post('/create', account_controller.createUser);

router.post('/', (req, res) => {
    Account.findAndCountAll({ 
        where: { username: req.body.username}
    }).then((results) => {
        if(results.count > 0){
            bcrypt.compare(req.body.password, results.rows[0].password, (err,cocok)=>{
                if(err) throw err
                else if (!cocok){
                    res.render('login', {processed: "true", message: "Incorrect Username and/or Password!"});
                }
                else{
                    req.session.user = results.rows[0]
                    if((req.body.username.toLowerCase() == "admin") && (req.body.password == "12345")){
                        req.session.loggedin = true;
                        res.redirect('/admin');
                    } else{
                        req.session.loggedin = true
                        res.redirect('/home');
                    }
                }
            })
        } else{
            res.render('login', {processed: "true", message: "Incorrect Username and/or Password!"});
        }
    })
})

router.post('/forgot', (req, res) => {
    Account.findAndCountAll({ 
        raw : true,
        where: { 
            [Op.and]: [
                {username: req.body.user_name},
                {email: req.body.user_email},
                {birth_date: req.body.user_date}
            ]
        }}
    ).then((results) => {
        if(results.count > 0){
            req.session.username = results.rows[0].username
            req.session.forgot = true
            res.redirect('/reset-password');
        } else {
            req.session.processed = "true"
            req.session.msg = "Incorrect Data!"
            res.redirect('/forgot-pass')
        }
    });
});

router.post('/reset', (req, res) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            if(err) throw err
            else {
                Account.update({ password: hash },
                        { where: {username: req.session.username}}
                    ).then( ()=>{
                        req.session.processed = "true"
                        res.redirect('/success-reset');
                });
            };
        });
    });
});

export default router