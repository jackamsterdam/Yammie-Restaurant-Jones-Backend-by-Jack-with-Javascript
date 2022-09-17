-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 17, 2022 at 10:01 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yammiedb`
--
CREATE DATABASE IF NOT EXISTS `yammiedb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `yammiedb`;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `orderDate` datetime NOT NULL,
  `customerName` varchar(30) NOT NULL,
  `deliveryAddress` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `price`, `orderDate`, `customerName`, `deliveryAddress`, `phone`) VALUES
(1, '87.22', '2022-09-17 14:16:02', 'Jenny', '476 5th Ave, New York, NY 10018, United States', '0587456548'),
(2, '85.39', '2022-09-17 14:19:38', 'George', '30 Rockefeller Plaza, New York, NY 10112, United States', '0587564561'),
(3, '35.10', '2022-09-17 17:19:38', 'Jonathan', '11 W 53rd St, New York, NY 10019, United States', '0522354084'),
(4, '60.25', '2022-09-17 16:27:38', 'Howard', '4 Pennsylvania Plaza, New York, NY 10001, United States', '0545315048'),
(5, '93.56', '2022-09-17 16:36:29', 'David', '43 W 14th St, New York, NY 10011, United States', '0584809549'),
(6, '45.21', '2022-09-17 07:11:47', 'Susan', '295 Madison Ave Suite 901, New York, NY 10017, United States', '0584056515'),
(7, '65.98', '2022-09-17 12:33:49', 'Joseph', '881 7th Ave, New York, NY 10019, United States', '0587406548'),
(8, '69.58', '2022-09-17 10:41:26', 'Lilly', '525 E 68th St, New York, NY 10065, United States', '0547056484'),
(9, '56.89', '2022-09-18 12:30:37', 'Sally', '221 E 44th St, New York, NY 10017, United States', '0547059875'),
(10, '63.89', '2022-09-18 13:19:38', 'Andy', '35 W 32nd St, New York, NY 10001, United States', '0521549705'),
(11, '43.56', '2022-09-19 13:33:30', 'Simon', '116 8th Ave, New York, NY 10011, United States', '0522494874'),
(12, '89.65', '2022-09-19 16:39:14', 'Andrew', '281 1st Ave., New York, NY 10003, United States', '0522497484'),
(13, '59.61', '2022-09-19 10:37:26', 'Will', '370 Canal St, New York, NY 10013, United States', '0548708498'),
(14, '80.25', '2022-09-20 08:29:31', 'Edward', '123 Nassau St, New York, NY 10038, United States', '0548709548'),
(15, '59.63', '2022-09-20 18:36:47', 'Ashley', '151 Maiden Ln, New York, NY 10038, United States', '0584570949'),
(16, '28.95', '2022-09-21 13:38:09', 'Sandra', '8 Albany St, New York, NY 10006, United States', '0549498457'),
(17, '30.56', '2022-09-22 07:54:13', 'Gregory', '36 Battery Pl, New York, NY 10280, United States', '0549448754');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
