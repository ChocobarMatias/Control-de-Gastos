create database db_ControlGastos;
use db_ControlGastos;

create table usuario(
id_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    userName VARCHAR(50) NOT NULL,
    Email VARCHAR(250) NOT NULL UNIQUE,
    Contraseña VARCHAR(255) NOT NULL,
    Activo BOOLEAN DEFAULT false,
    Rol ENUM('admin', 'usuario') DEFAULT 'usuario' 
);

create table Tarjetas_Credito(
id_tarjeta int primary key auto_increment not null,
nombreTarjeta varchar(250),
montoPagar decimal not null,
EstadoPago varchar(20) not null,
fechaCierre varchar(30),
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null
);

Create table Impuestos(
id_impuesto int primary key auto_increment,
nombreImpuesto varchar(200),
montoImpuesto varchar(200),
EstadoPago varchar(20) not null,
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null
);

create table Otros(
id_otro int primary key auto_increment not null,
nombreOtro varchar(200),
montoOtro varchar(200),
EstadoPago varchar(20) not null,
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null
);

create table Conectividad(
id_conectividad int primary key auto_increment not null,
nombreConectividad varchar(200),
montoConectividad varchar(200),
EstadoPago varchar(20) not null,
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null
);

Create table Educacion(
id_educacion int primary key auto_increment not null,
nombreEducacion varchar(200),
montoEducacion varchar(200),
EstadoPago varchar(20) not null,
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null
);

create Table Vehiculos(
id_vehiculo int primary key auto_increment not null,
nombreVehiculo varchar(200),
montoVehiculo varchar(200),
EstadoPago varchar(20) not null,
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null
);

Create table Deuda_Pagar(
id_DeudaPagar int primary key auto_increment not null,
nombreDeudaPagar varchar(200),
montoDeudaPagar varchar(200),
EstadoPago varchar(20) not null,
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null
);

Create table Deuda_Cobrar(
id_DeudaCobrar int primary key auto_increment not null,
nombreDeudaCobrar varchar(200),
montoDeudaCobrar varchar(200),
EstadoPago varchar(20) not null,
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null
);