--Tablas temporales

--Declarando variables tipo tabla
USE PracticaI
DECLARE @tabla TABLE( id int PRIMARY KEY, nombre varchar(500), Cif varchar(20))
INSERT INTO @tabla SELECT IdCliente, Nombre, Cif FROM Cliente
SELECT * FROM @tabla

SELECT * FROM Cliente

--Creando tablas temporales

--Las tablas temporales locales se eliminan automaticamente cuando la conexion asociada a ella se acaba
CREATE TABLE #TablaTemporalLocal(Id int, Nombre varchar(50))
--Las tablas temporales globales se eliminan automaticamente cuando todas las conexiones asociadas a ella se acaban
CREATE TABLE ##TablaTemporalGlobal(Id int, Nombre varchar(50))

--Creando vistas

CREATE VIEW VistaNombres
AS
SELECT Nombre FROM Cliente

SELECT * FROM VistaNombres ORDER BY Nombre