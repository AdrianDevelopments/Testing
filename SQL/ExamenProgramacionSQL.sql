--1) Modificar P.A RegistrarCliente para que permita alta de nuevos clientes (SI NO EXISTE EL CIF) y actualización de clientes (SI EXISTE EL CIF)

SELECT Cif FROM Cliente
SELECT * FROM Cliente
EXEC RegistrarCliente @Nombre = 'ClienteActualizado', @Email = 'clienteactualizado@gmail.com', @Usuario = 'ClienteActualizado', @Cif = 'C44333F', @Direccion = 'Naco IV', @Password = 'Adrian0611'
--2) Crear un P.A que nos permita realizar un pedido para un cliente, y nos permita añadir una o varias líneas de pedido en posteriores
-- llamadas de ese mismo P.A, siempre y cuando no este facturado dicho pedido
--3) Crear bucle que nos permita generar pedidos