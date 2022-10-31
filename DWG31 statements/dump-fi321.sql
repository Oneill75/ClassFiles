-- MariaDB dump 10.19  Distrib 10.4.22-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: fi321
-- ------------------------------------------------------
-- Server version	10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `fi321`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `fi321` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `fi321`;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `role` enum('Member','Admin') NOT NULL DEFAULT 'Member',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'erikamusterfrau','$2y$10$ORo1XwdWAgbG8psnYsiMfuZO82UHJZioSW22R55HKWSKAG5ZaehfS','erika.musterfrau@example.com',0,'Member'),(2,'ernamischke','$2y$10$nIvu3glianDpOd15E7fVZeyXolRxPg2gev82v8xkGct7LuGdfTQc6','erna.mischke@example.com',0,'Member'),(3,'hanswurst','$2y$10$NxMpEMpVARPIhe/G0aMYh.F///3Uz2fsTbwmfyrawBwXp84BwF9zq','hans.wurst@example.com',0,'Member'),(4,'janedoe','$2y$10$pW2PvoQM6opCakHu3Gf3/ukwJwBDpM5naI/iz8Ietm.Xk7C0mdq9a','jane.doe@example.com',0,'Member'),(5,'johndoe','$2y$10$zlil6cM00F9WF9jJUYCXWOucuP4FrzleJ3Gr5oizrFtW52sjdGLma','john.doe@example.com',0,'Member'),(6,'maxmustermann','$2y$10$/AcH9nX5bWIftlyAbJZuhOMuU469OM9KxzCocvFTIPFaYe9QgwWwi','max.mustermann@example.com',0,'Member'),(7,'tilleulenspiegel','$2y$10$dLo2ogYDDzJYqit7PJ1jbehdfNE/IVPK.ItOn5HlQyfXnKNvvuGSS','till.eulenspiegel@example.com',0,'Member'),(8,'walligeier','$2y$10$1wPMBlC2a/j0xH0wHbBN6O6KTu8EDT/Kz6ohPsEjyUyT.A/6ozbdy','walli.geier@example.com',0,'Member'),(9,'williwuchtig','$2y$10$DG6/ZLw8T/9YcTXVDmb8veQ8Tk9TJy.qfG6rmKPb4LA.Bn0Y0674u','williwuchtig@example.com',0,'Admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-20 11:59:20
