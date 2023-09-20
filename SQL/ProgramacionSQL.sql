--Condicionales en SQL
DECLARE @numero int
--SET @numero = 0

IF(@numero<6)
	BEGIN
		PRINT('El numero es menor que 6')
		PRINT(CAST(@numero + 1 AS Varchar(3)))
	END
ELSE IF(@numero=6)
	BEGIN
		PRINT('El numero es 6')
	END
ELSE IF(@numero=NULL)
	BEGIN
		PRINT('El numero es NULL')
	END
ELSE
	BEGIN
		PRINT('El numero es mayor que 6')
	END

--CASE...WHEN...THEN en SQL Server

SELECT IdPedido AS Pedido, COUNT(IdPedido) AS Items, 
CASE COUNT(IdPedido)
	WHEN 1 THEN 'Singular'
	WHEN 2 THEN 'Plural'
	END AS Cantidad
FROM Lineas_Pedido GROUP BY IdPedido

SELECT * FROM Producto

UPDATE Producto SET StockDisponible=(
	CASE IdProducto
		WHEN 15 THEN StockDisponible + 5
		WHEN 16 THEN StockDisponible + 12
	END
) WHERE IdProducto IN (15,16)

--WHILE en SQL Server

DECLARE @Contador int
SET @Contador = 1
WHILE @Contador < 5
	BEGIN
		PRINT(@Contador)
		SET @Contador = @Contador + 1
	END

DECLARE @ContadorAux int
DECLARE @Id uniqueidentifier
DECLARE @PVP float
DECLARE @PrecioCompra float
DECLARE @Tangible bit
DECLARE @IvaActual float
DECLARE @StockDisponible int
DECLARE @Nombre varchar(200)
DECLARE @Iteraciones int
DECLARE @RandomPrice float
SET @Iteraciones = 0

WHILE (SELECT COUNT(*) FROM Producto) < 17
	BEGIN
		SET @ContadorAux = (SELECT COUNT(*) FROM Producto)
		SET @RandomPrice = @ContadorAux * 10
		SET @Id = NEWID()
		SET @PVP = @ContadorAux + (@Iteraciones + 1.75)
		SET @PrecioCompra = @ContadorAux + @RandomPrice
		SET @IvaActual = @ContadorAux * 0.47
		SET @StockDisponible = @ContadorAux * 50
		SET @Nombre = 'Producto' + 
			CAST((CONVERT(INT, RIGHT((SELECT TOP 1 Nombre FROM Producto WHERE Nombre LIKE 'Producto%' ORDER BY IdProducto DESC), 2)) + 1) AS VARCHAR(3))
		IF @Iteraciones % 2 = 0
			BEGIN
				SET @Tangible = 1
			END
		ELSE
			BEGIN
				SET @Tangible = 0
			END
		SET @Iteraciones = @Iteraciones + 1

		INSERT INTO Producto(CodProducto, PVP, PrecioCompra, Tangible, IvaActual, StockDisponible, Nombre)
		VALUES (@Id, @PVP, @PrecioCompra, @Tangible, @IvaActual, @StockDisponible, @Nombre)
	END
SELECT * FROM Producto

CREATE PROCEDURE ReturnProcedure
@Numero int
AS
BEGIN
	DECLARE @NInterno int
	SET @NInterno = 0

	WHILE @NInterno < @Numero
		BEGIN
			IF @Numero < 0
				BEGIN
					PRINT('Este es un numero negativo, rompiendo bucle....')
					--Rompiendo el bucle en caso de que ambos numeros sean iguales
					BREAK
				END

			PRINT(@NInterno)
			SET @NInterno += 1

			IF @NInterno = @Numero
				BEGIN	
					PRINT('Ambos numeros ahora son iguales, retornando resultado...')
					RETURN @NInterno
				END
		END
END

DECLARE @Resultado int
EXEC @Resultado =  ReturnProcedure 7
PRINT(@Resultado)

--TRY...CATCH....
USE PracticaI
--Las transacciones nos permiten que revirtamos los datos o cambios dentro de su alcance si sucede algún error, en conjunto con los TRY...CATCH
--Empezando transaccion
BEGIN TRANSACTION;
--Empezando bloque TRY
BEGIN TRY
	DECLARE @Password varchar(10)
	DECLARE @EncryptedPassword varbinary(500)
	SET @Password = '0611'
	SET @EncryptedPassword = ENCRYPTBYPASSPHRASE('YarilynAmor', @Password)

	INSERT INTO Cliente(Nombre, Cif, Email, Direccion, Usuario, Password, FechaAlta) VALUES ('Cliente 14', 'GFBSD455', '14@gmail.com', 'Naco II', 'Cliente14', @EncryptedPassword , GETDATE())
	--SELECT 1/0
	SELECT * FROM Cliente
	--Confirmando la transaccion en caso de que todo salga bien, si no hago el COMMIT TRANSACTION la transaccion aún quedaria pendiente
	COMMIT TRANSACTION
--Finalizando bloque Try
END TRY
--Empezando bloque catch
BEGIN CATCH
--Mostrando el Numero del error y el Mensaje del Error
	SELECT ERROR_NUMBER() As ID, ERROR_MESSAGE() As Mensaje
	--
	IF @@TRANCOUNT > 0
		ROLLBACK TRANSACTION
		--@@IDENTITY nos devuelve el ultimo registro insertado
--Terminando bloque catch
END CATCH
