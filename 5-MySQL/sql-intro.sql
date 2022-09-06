SHOW DATABASES;
CREATE DATABASE tienda;
USE tienda;

CREATE TABLE clientes(
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR(150) NOT NULL
 );
 
 
 INSERT INTO clientes (nombre, apellido, telefono, direccion)
 VALUES ('Pedro', 'Paramo', '555555234', 'Comala'),
('Raul', 'Sanchez', '4224895', 'Guadalajara'),
('Victor', 'Fernandez', '652188633', 'CDMX');

SELECT * FROM clientes;

DELETE FROM clientes WHERE cliente_id = 3;
