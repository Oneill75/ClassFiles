-- MySQL Workbench Synchronization
-- Generated: 2022-11-22 11:46
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Oneill75

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `kalkhoffwaschzettel` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `kalkhoffwaschzettel`.`user` (
  `iduser` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL DEFAULT NULL,
  `firstname` VARCHAR(45) NULL DEFAULT NULL,
  `lastname` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(60) NULL DEFAULT NULL,
  `is_superuser` TINYINT(4) NULL DEFAULT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `kalkhoffwaschzettel`.`companywaschzettel` (
  `idwaschzettel` INT(11) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `company_name` VARCHAR(45) NOT NULL,
  `logo` VARCHAR(45) NULL DEFAULT NULL,
  `location` VARCHAR(45) NOT NULL,
  `description` TINYTEXT NOT NULL,
  `is_draft` TINYINT(4) NULL DEFAULT 1,
  `is_marked_for_delete` TINYINT(4) NULL DEFAULT 0,
  PRIMARY KEY (`idwaschzettel`),
  INDEX `username_idx` (`username` ASC) ,
  UNIQUE INDEX `company_name_UNIQUE` (`company_name` ASC) ,
  CONSTRAINT `username`
    FOREIGN KEY (`username`)
    REFERENCES `kalkhoffwaschzettel`.`user` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `kalkhoffwaschzettel`.`loginrecords` (
  `username` VARCHAR(45) NULL DEFAULT NULL,
  `login_timestamp` DATETIME NULL DEFAULT NULL,
  `logout_timestamp` DATETIME NULL DEFAULT NULL,
  INDEX `username_idx` (`username` ASC) ,
  CONSTRAINT `username1`
    FOREIGN KEY (`username`)
    REFERENCES `kalkhoffwaschzettel`.`user` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
