import express from 'express';
import {Account} from '../models/accounts.js';
import Order from '../models/orders.js';
import {checkLogout} from '../controllers/check.js'

const router = express.Router();
router.use(express.static('public'));

router.get('/create-table', (req, res) => {
    Order.sync()
    Account.sync()
    res.end("Tabel berhasil dibuat")
})

router.get('/', (req, res) => {
    res.render('login', { processed: "false"});
})

router.get('/sign-up', (req, res) => {
    res.render('register', { processed: "false"});
})

router.get('/forgot-pass', (req, res) => {
    let processed = req.session.processed || "false", msg = req.session.msg || ""
    req.session.processed = "false"
    req.session.msg = ""
    res.render('forgot_pass', {processed: processed, message: msg});
})

router.get('/reset-password', (req, res) => {
    if(req.session.forgot){
        req.session.forgot = false
        res.render('reset_password');
    } else{
        res.redirect('/')
    }
})

router.get('/success-create', (req, res) => {
    res.render('login', { processed: "true", message: "Account succesfully created"});
})

router.get('/success-reset', (req, res) => {
    if(req.session.processed == "true"){
        req.session.processed = "false"
        res.render('login', { processed: "true", message: "Password succesfully reset"});
    } else
        res.redirect('/');
})

router.get('/user/logout', checkLogout, async (req, res) => {
    req.session.loggedin = false;
    res.json({result: 'SUCCESS'});
});

export default router