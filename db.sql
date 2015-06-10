-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: localhost    Database: arnaudpoffe
-- ------------------------------------------------------
-- Server version	5.6.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answers` (
  `idanswers` int(11) NOT NULL AUTO_INCREMENT,
  `answer_text` varchar(1000) CHARACTER SET latin1 DEFAULT NULL,
  `question_fk` int(11) NOT NULL,
  `is_correct` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idanswers`),
  KEY `question_fk_idx` (`question_fk`),
  CONSTRAINT `question_fk` FOREIGN KEY (`question_fk`) REFERENCES `questions` (`idquestions`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES (1,'Placer le triangle de sécurité',1,1),(2,'Examiner ses blessures',1,0),(3,'Prendre une photo',1,0),(4,'Avertir les secours',1,0),(5,'En stationnement',2,1),(6,"A l'arrêt",2,0),(7,'Arrété',2,0),(8,'En mouvement',2,0),(9,'Oui',3,1),(10,'Non',3,0),(11,'Pas obligatoire',3,0),(12,'Oui seulement si un véhicule me suit',3,0),(13,'Où la priorité de droite est applicable',4,1),(14,'Je dois céder le passage',4,0),(15,'Dangereux à 150m',4,0),(16,"Non ce n'est pas un carrefour",4,0),(17,"Le titulaire de la plaque d'immatriculation",5,1),(18,'Le conducteur',5,0),(19,"Le propriétaire de l'assurance",5,0),(20,'Le propriétaire du véhicule',5,0),(21,'30 km/h',6,1),(22,'10 km/h',6,0),(23,'20 km/h',6,0),(24,'40 km/h',6,0),(25,'Céder le passage à ma droite',7,1),(26,'Céder le passage à ma gauche',7,0),(27,"Marquer l'arrêt obligatoirement",7,0),(28,'Klaxonner pour avertir les autres',7,0),(29,'0,25 g/l',8,1),(30,'0,15 g/l',8,0),(31,'0,35 g/l',8,0),(32,'0,05 g/l',8,0),(33,"15m de part et d'autre",9,1),(34,'15m au delà',9,0),(35,'15m en deçà',9,0),(36,'Cela dépend de la situation',9,0),(37,'Oui',10,1),(38,'Non',10,0),(39,'Seulement au chef de corps des pompiers',10,0),(40,'Si il est en uniforme',10,0);

/*!40000 ALTER TABLE `answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `idquestions` int(11) NOT NULL AUTO_INCREMENT,
  `question_text` varchar(1000) CHARACTER SET latin1 DEFAULT NULL,
  `question_img` varchar(1000) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`idquestions`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'Je viens de renverser un piéton, quel est mon premier réflexe ?','1'),(2,'Mon GSM sonne. Je me gare sur le côté, du coup mon véhicule est considéré comme ?','2'),(3,'Avant de contourner ce piéton, je suis obligé de clignoter à gauche : ?','3'),(4,'Ce signal annonce un carrefour : ?','4'),(5,"Je suis flashé sur la route, qui est censé avoir commis l'infraction ?",'5'),(6,'Sur ce dispositif surélevé, ma vitesse maximale est limitée à :','6'),(7,'Que dois-je faire face à cette situation ?','7'),(8,"Un verre d'alcool provoque approximativement une alcoolémie de : ?",'8'),(9,"A hauteur d'un panneau indiaquant un arrêt de bus, je peux stationner à : ?",'9'),(10,"Sur le lieu d'un accident je dois obéir à l'injonction d'un pompier ?",'10');

/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-04-23 15:18:19
