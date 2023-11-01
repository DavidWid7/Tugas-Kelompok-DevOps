-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql_db
-- Generation Time: Oct 26, 2023 at 11:56 AM
-- Server version: 8.1.0
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `launderland`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `birth_date` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `email`, `first_name`, `last_name`, `birth_date`, `alamat`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '$2b$10$HMEBKci8dczokZ0V9z82Re5UbSN9RPDrQ2wvZ8bcRtMsWargV8a0m', 'admin@admin.com', 'admin', 'admin', '2000-01-01', 'Jln. Bambu No.23, Medan', '2022-01-21 13:28:52', '2022-01-21 13:28:52'),
(2, 'david', '$2b$10$BsziezCfNfbriBtG9QRKKu6PPncAawRdpCSpCXlcCl4YBdn4jn4mO', 'david@gmail.com', 'david', 'widjaja', '2002-03-05', 'Jln. Asia No.9, Medan', '2022-01-21 13:29:55', '2022-01-21 13:32:25'),
(3, 'karina', '$2b$10$Qgmd4FduLNzcIUpZSJ3OruRSX846o4JgwDVb0jGwbpiwhESZYL6PG', 'karina@gmail.com', 'Karina', 'Mannita', '2002-06-04', 'Jln. Listrik No.20 Medan', '2023-10-26 11:40:39', '2023-10-26 11:40:39'),
(4, 'william', '$2b$10$k2oDMgyj.JRPq1maZ3fXkejlsd5tWV5IE8rLU8RXC5R6z4/TThM6W', 'william@gmail.com', 'William', 'Prasetyo', '2002-06-06', 'Jln. Kampung No.99, Medan', '2023-10-26 11:41:49', '2023-10-26 11:41:49'),
(5, 'ananda', '$2b$10$g6SPXIoGD5CYpYYms.Z2k.iui7z9CPMHj9bawvz4/vjBcdjyFO1DS', 'ananda@gmail.com', 'ananda', 'brahmana', '2002-01-02', 'Jln. Bolu No.33, Medan', '2023-10-26 11:45:52', '2023-10-26 11:45:52'),
(6, 'roger', '$2b$10$dJz8Z5D7DG9Rb19Vgaiwy.r4csEJRENKXQpGJsRvHymgqqTDjhmgu', 'roger@gmail.com', 'roger', 'siera', '2002-01-31', 'Jln. Pakam No.22, Medan', '2023-10-26 11:47:06', '2023-10-26 11:47:06');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `nama_pelanggan` varchar(255) DEFAULT NULL,
  `no_hp` varchar(255) DEFAULT NULL,
  `jenis_pakaian` varchar(255) DEFAULT NULL,
  `jumlah_pakaian` int(11) DEFAULT NULL,
  `total_berat` int(11) DEFAULT NULL,
  `tipe_pengantaran` varchar(255) DEFAULT NULL,
  `biaya_pesanan` bigint(20) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `paket` varchar(255) DEFAULT NULL,
  `tanggal` varchar(255) DEFAULT NULL,
  `waktu_pengantaran` varchar(255) DEFAULT NULL,
  `waktu_penjemputan` varchar(255) DEFAULT NULL,
  `alamat_pengantaran` varchar(255) DEFAULT NULL,
  `alamat_penjemputan` varchar(255) DEFAULT NULL,
  `tanggal_selesai` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `username`, `nama_pelanggan`, `no_hp`, `jenis_pakaian`, `jumlah_pakaian`, `total_berat`, `tipe_pengantaran`, `biaya_pesanan`, `status`, `paket`, `tanggal`, `waktu_pengantaran`, `waktu_penjemputan`, `alamat_pengantaran`, `alamat_penjemputan`, `tanggal_selesai`, `createdAt`, `updatedAt`) VALUES
(1, 'david', 'david', '0812391313', 'Pakaian Biasa', 4, 3, 'Antar & Jemput Sendiri', 22000, 'SELESAI', 'REGULER', '2022-01-24', NULL, NULL, NULL, NULL, '2023-10-26', '2022-01-21 13:34:32', '2023-10-26 11:23:22'),
(2, 'ananda', 'ananda', '0812391313', 'Pakaian Biasa', 9, 14, 'Antar & Jemput Sendiri', 136000, 'SELESAI', 'REGULER', '2022-01-24', NULL, NULL, NULL, NULL, '2022-01-21', '2022-01-21 13:34:45', '2022-01-21 13:42:36'),
(3, 'david', 'david', '0812391313', 'Pakaian Biasa', 12, 20, 'Diantar', 280000, 'SELESAI', 'MEDIUM', '2022-01-23', '9:00 AM', NULL, ' Jln. Asia No.9, Medan ', NULL, '2022-01-21', '2022-01-21 13:35:18', '2022-01-21 13:42:23'),
(4, 'william', 'william', '0812391313', 'Pakaian Biasa', 10, 10, 'Antar & Jemput Sendiri', 120000, 'PROSES', 'MEDIUM', '2022-01-23', NULL, NULL, NULL, NULL, NULL, '2022-01-21 13:35:29', '2022-01-21 13:35:29'),
(5, 'david', 'david', '0812391313', 'Pakaian Biasa', 20, 25, 'Diantar & Dijemput', 565000, 'PROSES', 'HIGH', '2022-01-22', '15:00 PM', '17:00 PM', ' Jln. Bimasakti No.1, Medan ', ' Jln. Asia No.9, Medan ', NULL, '2022-01-21 13:36:24', '2022-01-21 13:36:24'),
(6, 'david', 'david', '0812391313', 'Pakaian Biasa', 12, 10, 'Diantar', 170000, 'PROSES', 'HIGH', '2022-01-22', '8:00 AM', NULL, ' Jln. Asia No.9, Medan ', NULL, NULL, '2022-01-21 13:36:37', '2022-01-21 13:36:37'),
(7, 'karina', 'karina', '08129332485', 'Pakaian Biasa', 6, 3, 'Antar & Jemput Sendiri', 28000, 'PROSES', 'REGULER', '2022-01-24', NULL, NULL, NULL, NULL, NULL, '2022-01-21 13:37:17', '2022-01-21 13:37:17'),
(8, 'roger', 'roger', '08129332485', 'Pakaian Biasa', 2, 11, 'Antar & Jemput Sendiri', 32000, 'PROSES', 'REGULER', '2022-01-24', NULL, NULL, NULL, NULL, NULL, '2022-01-21 13:37:28', '2022-01-21 13:37:28'),
(9, 'karina', 'karina', '08129332485', 'Selimut', 17, 19, 'Diantar', 383000, 'SELESAI', 'MEDIUM', '2022-01-23', '9:00 AM', NULL, ' Jln. Nanas No.50, Medan ', NULL, '2022-01-21', '2022-01-21 13:37:53', '2022-01-21 13:42:20'),
(10, 'karina', 'karina', '08129332485', 'Pakaian Biasa', 19, 12, 'Antar & Jemput Sendiri', 248000, 'SELESAI', 'MEDIUM', '2022-01-23', NULL, NULL, NULL, NULL, '2023-10-26', '2022-01-21 13:38:07', '2023-10-26 11:24:12'),
(11, 'ananda', 'ananda', '08129332485', 'Other', 40, 40, 'Diantar', 1680000, 'SELESAI', 'HIGH', '2022-01-22', '8:00 AM', NULL, ' Jln. Nanas No.50, Medan ', NULL, '2022-01-21', '2022-01-21 13:38:36', '2022-01-21 13:42:31'),
(12, 'roger', 'roger', '08129332485', 'Pakaian Biasa', 12, 22, 'Antar & Jemput Sendiri', 294000, 'PROSES', 'HIGH', '2022-01-22', NULL, NULL, NULL, NULL, NULL, '2022-01-21 13:38:48', '2022-01-21 13:38:48'),
(13, 'karina', 'karina', '081239192312', 'Pakaian Biasa', 2, 11, 'Antar & Jemput Sendiri', 32000, 'SELESAI', 'REGULER', '2022-01-24', NULL, NULL, NULL, NULL, '2022-01-21', '2022-01-21 13:37:28', '2022-01-21 13:42:13'),
(14, 'william', 'william', '081239192312', 'Pakaian Biasa', 10, 10, 'Antar & Jemput Sendiri', 120000, 'PROSES', 'MEDIUM', '2022-01-23', NULL, NULL, NULL, NULL, NULL, '2022-01-21 13:35:29', '2022-01-21 13:35:29'),
(15, 'roger', 'roger', '081239192312', 'Pakaian Biasa', 10, 10, 'Antar & Jemput Sendiri', 120000, 'SELESAI', 'MEDIUM', '2022-01-23', NULL, NULL, NULL, NULL, '2022-01-21', '2022-01-21 13:35:29', '2022-01-21 13:42:43'),
(16, 'karina', 'karina', '081239192312', 'Pakaian Biasa', 4, 3, 'Antar & Jemput Sendiri', 22000, 'PROSES', 'REGULER', '2022-01-24', NULL, NULL, NULL, NULL, NULL, '2022-01-21 13:34:32', '2022-01-21 13:34:32'),
(17, 'ananda', 'ananda', '081239192312', 'Bed Cover', 12, 22, 'Antar & Jemput Sendiri', 319000, 'PROSES', 'HIGH', '2022-01-22', NULL, NULL, NULL, NULL, NULL, '2022-01-21 13:41:16', '2022-01-21 13:41:16'),
(18, 'william', 'william', '081239192312', 'Selimut', 37, 39, 'Diantar & Dijemput', 1528000, 'PROSES', 'HIGH', '2022-01-22', '15:00 PM', '10:00 AM', ' Jln. Melon No.6, Medan ', ' Jln. Semangka No.3, Medan ', NULL, '2022-01-21 13:41:52', '2022-01-21 13:41:52'),
(19, 'david', 'david', '08123913919', 'Pakaian Biasa', 5, 10, 'Antar & Jemput Sendiri', 60000, 'PROSES', 'REGULER', '2022-01-25', NULL, NULL, NULL, NULL, NULL, '2022-01-22 02:04:39', '2022-01-22 02:04:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
