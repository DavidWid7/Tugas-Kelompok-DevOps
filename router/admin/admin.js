import express from 'express';
import Order from '../../models/orders.js';

const router = express.Router();
router.use(express.static('public'));

router.get('/data_pelanggan', (req,res)=>{
    Order.findAll(
    ).then((results) => {
        res.json(results);
    })
})

router.get('/', (req, res) => {
    res.render('admin')
})

router.get('/paket-reguler', (req,res) => {
    res.render('admin_reguler');
});

router.get('/paket-medium', (req,res) => {
    res.render('admin_medium');
});

router.get('/paket-high', (req,res) => {
    res.render('admin_high');
});

router.put("/act-selesai/:id", function(req,res, next) {
    var date = new Date().toISOString().slice(0, 10);
    console.log(date)
    Order.update({status : "SELESAI", tanggal_selesai: date}, {where: { id : req.params.id}}
    ).then((results) => {
        res.json({ status: 200, error: null, Response: results });
    }).catch(err => {
        res.json({ status: 500, error: err, Response: {} });
    })
});

router.delete("/act-hapus/:id", function(req,res, next) {
    Order.destroy({
        where: {
            id : req.params.id
        }
    }).then(() => {
        res.json({ status: 200, error: null, Response: results });
    }).catch(err => {
        res.json({ status: 500, error: err, Response: {} });
    })
});

export default router
