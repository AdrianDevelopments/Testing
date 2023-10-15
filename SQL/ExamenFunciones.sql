USE PracticaI

/*Crear funcion que nos devuelva una unica columna que nos de los PRODUCTOS que tienen FACTURAS asociadas
sin anular para todos los CLIENTES o para un cliente. Llamara dicha función desde el P.A PRODUCTOS_NoVendidos*/
CREATE FUNCTION FacturasSinAnular(
@IdCliente int = NULL
)
RETURNS
@TablaProductos TABLE(
NombreProducto varchar(50)
)
AS
BEGIN
	INSERT @TablaProductos
	SELECT P.Nombre FROM Producto P
	INNER JOIN Lineas_Pedido LP ON LP.IdProducto = P.IdProducto
	INNER JOIN Factura F ON F.IdPedido = LP.IdPedido
	INNER JOIN Pedido PE ON PE.IdPedido = F.IdPedido
	INNER JOIN Cliente C ON PE.IdCliente = C.IdCliente
	WHERE F.FechaAnulacion IS NULL AND (@IdCliente IS NULL OR PE.IdCliente = @IdCliente)
	RETURN
END

SELECT * FROM FacturasSinAnular(2)
--INSERT INTO Factura(IdPedido, TotalProducto, TotalIva, TotalFactura, FechaFactura, FechaAnulacion) VALUES(12, 45.99, 15.66, 45.99+15.66, GETDATE(), NULL)
INSERT INTO Lineas_Pedido(IdPedido, IdProducto, PVP, Cantidad, IvaDetalle) VALUES(12, 12, 15, 27, 28.6)
/*Crear una funcion que devuelva el numero total de FACTURAS no anuladas de todos los CLIENTES o de un
CLIENTE o filtrados por CLIENTE*/

CREATE FUNCTION CantidadFacturasAnuladas(
@IdCliente int=NULL,
@Filtrar bit = 0
)
RETURNS
@FacturasNoAnuladas TABLE(
	CantidadFacturas int,
	IdCliente int
)
AS
BEGIN

	IF(@Filtrar = 0)
		BEGIN
			INSERT @FacturasNoAnuladas 
			SELECT COUNT(*), NULL AS IdCliente FROM Factura F
			INNER JOIN Pedido P ON F.IdPedido = P.IdPedido
			INNER JOIN Cliente C ON P.IdCliente = C.IdCliente
			WHERE F.FechaAnulacion IS NOT NULL AND (@IdCliente IS NULL OR C.IdCliente = @IdCliente)
		END
	ELSE
		BEGIN
			INSERT @FacturasNoAnuladas
			SELECT COUNT(*), C.IdCliente AS IdCliente FROM Factura F
			INNER JOIN Pedido P ON F.IdPedido = P.IdPedido
			INNER JOIN Cliente C ON P.IdCliente = C.IdCliente
			WHERE F.FechaAnulacion IS NOT NULL AND (@IdCliente IS NULL OR C.IdCliente = @IdCliente)
			GROUP BY C.IdCliente
			ORDER BY C.IdCliente
		END
	RETURN
END

SELECT * FROM dbo.CantidadFacturasAnuladas(6, 1)