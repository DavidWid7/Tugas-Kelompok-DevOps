import {sequelize, DataTypes} from "./model.js";

const Order = sequelize.define('order', {
    username: DataTypes.STRING,
    nama_pelanggan: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    jenis_pakaian: DataTypes.STRING,
    jumlah_pakaian: DataTypes.INTEGER,
    total_berat: DataTypes.INTEGER,
    tipe_pengantaran: DataTypes.STRING,
    biaya_pesanan: DataTypes.BIGINT,
    status: DataTypes.STRING,
    paket: DataTypes.STRING,
    tanggal: DataTypes.STRING,
    waktu_pengantaran: DataTypes.STRING,
    waktu_penjemputan: DataTypes.STRING,
    alamat_pengantaran: DataTypes.STRING,
    alamat_penjemputan: DataTypes.STRING,
    tanggal_selesai: DataTypes.STRING
});

export default Order;