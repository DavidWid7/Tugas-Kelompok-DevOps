import express from 'express';
import {Account, Op} from '../../models/accounts.js';
import Order from '../../models/orders.js';

const router = express.Router();
router.use(express.static('public'));

router.get('/home', (req, res) => {
    console.log(req.session.user)
    Account.findOne({ where: { username: req.session.user.username } }
    ).then((results) => {
        res.render('index', { account: results });
    })
})

router.get('/profile', (req, res) => {
    Account.findOne({ where: { username: req.session.user.username } }
    ).then((results) => {
        res.render('profile', { account: results });
    })
});

router.get('/history', (req, res) => {
    Order.findAll({ where: { username: req.session.user.username }}
    ).then((results) => {
        res.render('history', { order: results , account: req.session.user });
    })
});

router.get('/faq', (req, res) => {
    Account.findOne({ where: { username: req.session.user.username } }
    ).then((results) => {
        res.render('faq', { account: results });
    })
});

router.get('/chat', (req, res) => {
    Account.findOne({ where: { username: req.session.user.username } }
    ).then((results) => {
        res.render('chat', { account: results });
    })
});

router.get('/livechat', (req, res) => {
    res.render('livechat');
});

router.get('/privacy-policy', (req, res) => {
    res.render('privacy');
});

router.get('/about-us', (req, res) => {
    res.render('aboutus');
});

export default router