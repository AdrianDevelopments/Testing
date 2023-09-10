CREATE PROCEDURE RegistrarCliente
@Cif varchar(20),
@Direccion varchar(200),
@Password varchar(500)
AS
BEGIN

DECLARE @HashedPassword varbinary(500)
DECLARE @CharCliente varchar(3)
DECLARE @NumeroCliente int
SET @HashedPassword = ENCRYPTBYPASSPHRASE('YARILYN',@Password)
SET @CharCliente = (SELECT TOP 1 CAST(RIGHT(Nombre, 2) AS INT) AS NumeroConvertido FROM Cliente ORDER BY IdCliente DESC)
SET @NumeroCliente = @CharCliente + 1

INSERT INTO Cliente(Nombre, Cif, Email, Direccion, Usuario, Password, FechaAlta) VALUES('Cliente ' + CAST(@NumeroCliente AS varchar), @Cif, CAST(@NumeroCliente AS varchar) + '@gmail.com', @Direccion, 'Cliente' + CAST(@NumeroCliente AS varchar), @HashedPassword, GETDATE())
END


INSERT INTO Cliente(Nombre, Cif, Email, Direccion, Usuario, Password, FechaAlta) VALUES ('Cliente 13', 'FJSMR21', '13@gmail.com', 'Naco I', 'Cliente13', ENCRYPTBYPASSPHRASE('YARILYN','amor'), GETDATE())

EXEC RegistrarCliente 'FJSMR20', 'Piantini II', 'YarilynMiAmor'

SELECT * FROM Cliente