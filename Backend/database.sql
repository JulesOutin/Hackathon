
-- Table `joboffers`

-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `joboffers`(

  `joboffer_id` INT NOT NULL AUTO_INCREMENT,
  `joboffer_title` VARCHAR(255) NOT NULL,
  `joboffer_description` TEXT NOT NULL,
  `joboffer_price` INT NOT NULL,
  `joboffer_isWorker` VARCHAR(30) NOT NULL,
  `joboffer_localisation` VARCHAR(100) NOT NULL,
  `joboffer_image` TEXT NOT NULL,
  `joboffer_duration` INT,
  `joboffer_createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `user_email` VARCHAR(80) NOT NULL,
  `user_filiere` VARCHAR(80) NOT NULL,
  `user_name` VARCHAR(50) NOT NULL,
  `user_phone` VARCHAR(10),
  `user_discord` VARCHAR(255),
  PRIMARY KEY (`joboffer_id`)
  );