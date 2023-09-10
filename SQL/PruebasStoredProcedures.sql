--Crear un P.A para insertar producto

--SELECT * FROM Producto

/*CREATE PROCEDURE Insertar_Producto_SP
@PVP int,
@PrecioCompra float,
@Tangible bit,
@IvaActual float,
@Stock int,
@Nombre varchar(200)
AS
BEGIN
INSERT INTO Producto(CodProducto, PVP, PrecioCompra, Tangible, IvaActual, StockDisponible, Nombre) VALUES (NEWID(),@PVP, @PrecioCompra, @Tangible, @IvaActual, @Stock, @Nombre)
END*/

--EXEC Insertar_Producto_SP 15, 199.99, 1, 25.96, 3, 'Galaxy Watch 3'

--Crear un P.A que devuelva todos los clientes o un unico cliente

/*CREATE PROCEDURE Obtener_Cliente_SP
@IdCliente int = NULL,
@NombreCliente varchar(50) = NULL
AS
BEGIN
--Si ninguno de los dos parametros es diferente de NULL entonces significa que ambos parametros son NULL, por lo cual caera en la tercera opcion
--Por la cual devolvera un SELECT con todos los registros existentes en la tabla
SELECT * FROM Cliente WHERE (Nombre=@NombreCliente OR IdCliente=@IdCliente OR (@NombreCliente IS NULL AND @IdCliente IS NULL))
END

EXEC Obtener_Cliente_SP 1012,NULL*/

--Crear un P.A que devuelva el total de compras de cada cliente o de un cliente especifico

/*CREATE PROCEDURE Obtener_Compras_SP
@IdCliente int = NULL
AS
BEGIN

SELECT P.IdCliente AS Id, C.Nombre, C.Email, C.Direccion, C.Usuario, COUNT(*) AS CantidadCompras
FROM Pedido P 
INNER JOIN Cliente C ON C.IdCliente = P.IdCliente
WHERE P.IdCliente=@IdCliente OR @IdCliente IS NULL
GROUP BY P.IdCliente, C.Nombre, C.Email, C.Direccion, C.Usuario

END

EXEC Obtener_Compras_SP 8*/

--Crear P.A que devuelva todos los productos que nunca se han vendido

CREATE PROCEDURE Obtener_Productos_NoVendidos_SP
AS
BEGIN

SELECT P.IdProducto, P.Nombre, P.CodProducto
FROM Producto P 
WHERE P.IdProducto NOT IN( 
	SELECT IdProducto 
	FROM Lineas_Pedido 
	GROUP BY IdProducto
	)

END

EXEC Obtener_Productos_NoVendidos_SP