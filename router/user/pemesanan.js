import express from 'express';
import {Account, Op} from '../../models/accounts.js';
import Order from '../../models/orders.js';
import {checkLoggedin} from '../../controllers/check.js'

const router = express.Router();
router.use(express.static('public'));

router.get('/', checkLoggedin, (req, res) => {
    Account.findOne({ where: { username: req.session.user.username } }
    ).then((results) => {
        res.render('pemesanan', { account: results });
    })
});

router.get('/reguler', checkLoggedin, (req, res) => {
    Order.findAll({ 
        where: { 
            [Op.and]: [
                {username: req.session.user.username},
                {paket: "REGULER"},
                {status: "PROSES"}
            ]
        }}
    ).then((results) => {
        if(req.session.processed == "true"){
            req.session.processed = "false"
            res.render('reguler', { order: results , account: req.session.user, processed: "true", message: req.session.message});
        }
        else{
            res.render('reguler', { order: results , account: req.session.user, processed: "false"});
        }
    })
});

router.get('/medium', checkLoggedin, (req, res) => {
    Order.findAll({ 
        where: { 
            [Op.and]: [
                {username: req.session.user.username},
                {paket: "MEDIUM"},
                {status: "PROSES"}
            ]
        }}
    ).then((results) => {
        if(req.session.processed == "true"){
            req.session.processed = "false"
            res.render('medium', { order: results , account: req.session.user, processed: "true", message: req.session.message});
        }
        else{
            res.render('medium', { order: results , account: req.session.user, processed: "false"});
        }
    })
});

router.get('/high', checkLoggedin, (req, res) => {
    Order.findAll({ 
        where: { 
            [Op.and]: [
                {username: req.session.user.username},
                {paket: "HIGH"},
                {status: "PROSES"}
            ]
        }}
    ).then((results) => {
        if(req.session.processed == "true"){
            req.session.processed = "false"
            res.render('high', { order: results, account: req.session.user, processed: "true", message: req.session.message});
        }
        else{
            res.render('high', { order: results, account: req.session.user, processed: "false"});
        }
    })
});

router.post('/reguler/proses', (req, res) => {
    Order.create({ 
        username: req.session.user.username,
		nama_pelanggan: req.body.namapelanggan,
        no_hp: req.body.nomorhp,
		jenis_pakaian: req.body.jenispakaian,
		jumlah_pakaian: req.body.jumlahpakaian,
		total_berat: req.body.beratpakaian,
		tipe_pengantaran: req.body.tipepengantaran,
		biaya_pesanan: req.body.biayapesanan,
		status: "PROSES",
		paket: "REGULER",
		tanggal: req.body.tanggalestimasi
    }).then( ()=>{
        req.session.processed = 'true'
        req.session.message = "Pesanan Berhasil"
        res.redirect('/pemesanan/reguler')
    })
})

router.post('/medium/proses', (req, res) => {
    Order.create({ 
        username: req.session.user.username,
		nama_pelanggan: req.body.namapelanggan,
        no_hp: req.body.nomorhp,
		jenis_pakaian: req.body.jenispakaian,
		jumlah_pakaian: req.body.jumlahpakaian,
		total_berat: req.body.beratpakaian,
		tipe_pengantaran: req.body.tipepengantaran,
		biaya_pesanan: req.body.biayapesanan,
		status: "PROSES",
		paket: "MEDIUM",
		tanggal: req.body.tanggalestimasi,
        waktu_pengantaran: req.body.waktupengantaran,
		alamat_pengantaran: req.body.alamat
    }).then( ()=>{
        req.session.processed = 'true'
        req.session.message = "Pesanan Berhasil"
        res.redirect('/pemesanan/medium')
    })
})

router.post('/high/proses', (req, res) => {
    Order.create({ 
        username: req.session.user.username,
		nama_pelanggan: req.body.namapelanggan,
        no_hp: req.body.nomorhp,
		jenis_pakaian: req.body.jenispakaian,
		jumlah_pakaian: req.body.jumlahpakaian,
		total_berat: req.body.beratpakaian,
		tipe_pengantaran: req.body.tipepengantaran,
		biaya_pesanan: req.body.biayapesanan,
		status: "PROSES",
		paket: "HIGH",
		tanggal: req.body.tanggalestimasi,
		waktu_pengantaran: req.body.waktupengantaran,
		waktu_penjemputan: req.body.waktupenjemputan,
		alamat_pengantaran: req.body.alamatpengantaran,
		alamat_penjemputan: req.body.alamatpenjemputan
    }).then( ()=>{
        req.session.processed = 'true'
        req.session.message = "Pesanan Berhasil"
        res.redirect('/pemesanan/high')
    })
})

export default router