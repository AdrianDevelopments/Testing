--Crear una vista que obtenga una lista de los productos vendidos de mayor precio a menor

CREATE VIEW VistaPrecios
AS 
SELECT TOP 1000 IdProducto, CodProducto, Nombre, PrecioCompra FROM Producto ORDER BY PrecioCompra DESC

--Crear una vista con los 3 productos a menor precio vendidos, despues obtener el nombre de los clientes
--que los compraron usando esa tabla

CREATE VIEW CheapItemsSold
AS
SELECT TOP 3 P.IdProducto, P.Nombre, Count(LP.IdProducto) AS Ventas, P.PrecioCompra AS Precio, C.IdCliente FROM Lineas_Pedido LP
INNER JOIN Producto P ON LP.IdProducto = P.IdProducto
INNER JOIN Pedido PE ON LP.IdPedido = PE.IdPedido
INNER JOIN Cliente C ON C.IdCliente = PE.IdCliente
GROUP BY P.IdProducto, P.Nombre, P.PrecioCompra, C.IdCliente
HAVING COUNT(LP.IdProducto) > 0 ORDER BY P.PrecioCompra
/*SELECT TOP 3 P.IdProducto, P.Nombre, Count(LP.IdProducto) AS Ventas, P.PrecioCompra AS Precio FROM Lineas_Pedido LP
INNER JOIN Producto P ON LP.IdProducto = P.IdProducto GROUP BY P.IdProducto, P.Nombre, P.PrecioCompra
HAVING COUNT(LP.IdProducto) > 0 ORDER BY P.PrecioCompra*/

SELECT C.IdCliente, C.Nombre, CIS.Nombre, CIS.Precio FROM CheapItemsSold CIS 
INNER JOIN Cliente C ON C.IdCliente = CIS.IdCliente

