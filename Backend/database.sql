-- -----------------------------------------------------
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


  -- Inserer des annonces fictives dans la table joboffers
INSERT INTO `joboffers`
(`joboffer_title`, `joboffer_description`, `joboffer_price`, `joboffer_isWorker`, `joboffer_localisation`, `joboffer_image`, `joboffer_duration`, `user_email`, `user_filiere`, `user_name`, `user_phone`, `user_discord`)
VALUES
('Cours de Maths', 'Donne des cours de maths niveau lycée', 20, 'Oui', 'Paris', 'maths_image.jpg', 2, 'john.doe@email.com', 'Mathématiques', 'John', '0601020304', 'John#1234'),
('Aide au Déménagement', 'Besoin d\'aide pour un déménagement ce week-end', 50, 'Non', 'Lyon', 'mover_image.jpg', 4, 'jane.doe@email.com', 'Physique', 'Jane', '0650607080', 'Jane#5678'),
('Développeur Web', 'Cherche développeur web pour créer un site', 200, 'Oui', 'Marseille', 'webdev_image.jpg', 10, 'sam.doe@email.com', 'Informatique', 'Sam', '0687654321', 'Sam#9101'),
('Baby-sitting', 'Besoin d\'un baby-sitter pour samedi soir', 30, 'Non', 'Toulouse', 'babysit_image.jpg', 5, 'emily.doe@email.com', 'Psychologie', 'Emily', '0630304050', 'Emily#1213'),
('Tutorat en Anglais', 'Offre des cours d\'anglais pour débutants', 25, 'Oui', 'Bordeaux', 'english_image.jpg', 3, 'paul.doe@email.com', 'Langues', 'Paul', '0640405060', 'Paul#1415');
