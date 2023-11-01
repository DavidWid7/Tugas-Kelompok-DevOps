import {Account} from "../models/accounts.js";
import bcrypt from 'bcrypt';

const createUser = (req, res, next)=>{
    var confirm_password = req.body.confirm_password, password = req.body.password, username = req.body.username
    Account.findAndCountAll({ where: { username: username }}
    ).then((results) => {
        if(results.count > 0){
			res.render('register', {processed: "true", message: username + " was already exist"})
        } else if(confirm_password != password){
			res.render('register', {processed: "true", message: "Password is not Matched"})
        } else{
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    if(err) throw err
                    else {
                        Account.create({ 
                            username: req.body.username,
                            password: hash,
                            email: req.body.email,
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            birth_date: req.body.birth_date,
                            alamat: req.body.alamat
                        }).then( ()=>{
                            res.redirect('/success-create');
                        })
                    }
                });
            });
		}
    })
}

export default {createUser}