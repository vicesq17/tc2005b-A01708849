DROP DATABASE IF EXISTS peleadores_db;
CREATE DATABASE peleadores_db;
USE peleadores_db;

CREATE TABLE peleadores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  imagen VARCHAR(255) NOT NULL,
  division VARCHAR(50) NOT NULL
);

INSERT INTO peleadores (nombre, imagen, division) VALUES
('Alex Pereira','/images/alex-pereira.jpg','Light Heavyweight'),
('Sean O''Malley','/images/sean-omalley.jpg','Bantamweight'),
('Charles Oliveira','/images/charles-oliveira.jpg','Lightweight');