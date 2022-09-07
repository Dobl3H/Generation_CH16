USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Alias
SELECT 5 + 5;

SELECT Name AS Nombre_de_pais, Population AS 'Poblacion del pais' FROM country ORDER BY Nombre_de_pais DESC;

SELECT DISTINCT Continent FROM country; -- Basicamente DISTINCT filtra los datos repetidos

-- Where clausula,
-- < > <= >= != = 
SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent ASC;

-- Between
-- junto con WHERE
SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;
SELECT * FROM country WHERE Population NOT BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;

-- OR / AND / != --  logicos
SELECT * FROM country WHERE Continent = 'Asia' OR Continent = 'Europa' OR Continent = 'North America';
SELECT * FROM country WHERE Continent != 'Asia' AND Continent != 'Europa' AND Continent != 'North America';


-- operador IN
SELECT * FROM country WHERE Continent IN ('Asia', 'Europa', 'North America') ORDER BY Continent ;
SELECT * FROM country WHERE Continent NOT IN ('Asia', 'Europa', 'North America') ORDER BY Continent ;

-- Filtrar valores nulos NULL
SELECT * FROM country WHERE IndepYear IS NOT NULL;
SELECT * FROM country WHERE IndepYear IS NULL;

-- LIKE sirve para buscar un patron en especifico
-- '%' buscar cualquier cantidad de caracteres
-- '_' especificamos un caracter
SELECT * FROM country WHERE Name LIKE '%and%';
SELECT * FROM country WHERE Name LIKE '%e__a';
SELECT * FROM country WHERE Continent LIKE 'asia';