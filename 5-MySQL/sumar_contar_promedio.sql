USE sakila;

SELECT * FROM payment;

-- SUM(), AVG(), COUNT()

SELECT customer_id, amount FROM payment;

-- COUNT() cuenta las filas de una tabla
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;

SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;

-- Cantidad de rentas que tuvo el trabajador 2
SELECT COUNT(*) FROM payment WHERE staff_id = 1;

-- Cantidad de clientes distintos
SELECT COUNT(DISTINCT customer_id) FROM payment;

/*
SUM()
*/
SELECT SUM(amount) AS 'Total de rentas' FROM payment;

SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 2;

-- ¡Cual cliente realizo mas rentas?
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) DESC;

-- Group BY
-- Order By - ordena segun la columna o funcion que le indiquemos ASC / DESC
SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

-- ¿CUal cliente gasto mas?
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total ASC;

-- AVG() - regra el promedio
SELECT AVG(amount) AS Promedio FROM payment;

-- ¿Cual cliente gasto mas en promedio?
SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;
SELECT customer_id, AVG(amount) AS promediocliente FROM payment GROUP BY customer_id ORDER BY promedioclient DESC;
