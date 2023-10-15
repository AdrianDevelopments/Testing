--Definiendo funcion tipo tabla
CREATE FUNCTION Tabla(
@IdCliente int
)
RETURNS 
@ProductosPorCliente TABLE(
	IdCliente int,
	Nombre varchar(500),
	IdPedido int,
	IdProducto int,
	ProductoNombre varchar(200)
)
AS
BEGIN
	INSERT @ProductosPorCliente
	SELECT C.IdCliente, C.Nombre, P.IdPedido, LP.IdProducto, PRD.Nombre AS ProductoNombre
	FROM Cliente C
	INNER JOIN Pedido P ON P.IdCliente = C.IdCliente
	INNER JOIN Lineas_Pedido LP ON P.IdPedido = LP.IdPedido
	INNER JOIN Producto PRD ON PRD.IdProducto = LP.IdProducto
	WHERE C.IdCliente = @IdCliente AND P.FechaAnulacion IS NULL
	ORDER BY IdCliente

	RETURN
END

SELECT * FROM Cliente
--Llamando Funcion tipo tabla
SELECT * FROM dbo.Tabla(2)