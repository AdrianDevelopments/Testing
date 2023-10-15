
--Crear funciones en SQL
CREATE FUNCTION Saludar(
@nombre varchar(50)
)
RETURNS varchar(70)
AS
BEGIN
	RETURN 'Hola ' + @nombre
END

--Llamando funciones en SQL
SELECT MONTH(GETDATE())
PRINT(dbo.Saludar('Adrian y Yarilyn'))