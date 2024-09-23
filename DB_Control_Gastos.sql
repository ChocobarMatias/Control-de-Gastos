create database db_ControlGastos;
use db_ControlGastos;

-- drop database db_ControlGastos

-- tabla usuario

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

-- tabla mes y año

CREATE TABLE Mes_Año (
    id_MesAño INT PRIMARY KEY AUTO_INCREMENT,
    Mes VARCHAR(20) NOT NULL,  -- Ejemplo: 'Enero', 'Febrero'
    Año INT NOT NULL  -- Ejemplo: 2023, 2024
);

-- tabla tarjetas

create table Tarjetas_Credito(
id_tarjeta int primary key auto_increment not null,
montoPagar decimal not null,
fechaCierre varchar(30),
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null,
id_usuario int not null,  -- Clave foránea
id_MesAño int not null,  -- Clave foránea
id_nombreTarjeta INT not null,
id_EstadoPago INT not null,
FOREIGN KEY (id_EstadoPago) REFERENCES EstadoPago(id_EstadoPago),
FOREIGN KEY (id_MesAño) REFERENCES Mes_Año(id_MesAño),
FOREIGN KEY (id_nombreTarjeta) REFERENCES Nombre_Tarjeta(id_nombreTarjeta),
foreign key (id_usuario) references usuario(id_Usuario)
);

-- por normalizacion de tabla uso la tercera forma normal y saco nombre_tarjeta para evitar redundancias de datos

CREATE TABLE Nombre_Tarjeta (
    id_nombreTarjeta INT PRIMARY KEY AUTO_INCREMENT,
    nombreTarjeta VARCHAR(250) NOT NULL
);

-- tabla estado de pago

CREATE TABLE EstadoPago (
    id_EstadoPago INT PRIMARY KEY AUTO_INCREMENT,
    estado VARCHAR(20) NOT NULL
);

-- tabla impuestos

Create table Impuestos(
id_impuesto int primary key auto_increment,
montoImpuesto varchar(200),
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null,
id_usuario int not null,  -- Clave foránea
id_MesAño int not null,  -- Clave foránea
id_EstadoPago INT,
id_nombreImpuesto INT,
FOREIGN KEY (id_nombreImpuesto) REFERENCES Nombre_Impuesto(id_nombreImpuesto),
FOREIGN KEY (id_EstadoPago) REFERENCES EstadoPago(id_EstadoPago),
FOREIGN KEY (id_MesAño) REFERENCES Mes_Año(id_MesAño),
foreign key (id_usuario) references usuario(id_Usuario) 
);

CREATE TABLE Nombre_Impuesto (
    id_nombreImpuesto INT PRIMARY KEY AUTO_INCREMENT,
    nombreImpuesto VARCHAR(200) NOT NULL
);

-- tabla otro

create table Otros(
id_otro int primary key auto_increment not null,
montoOtro varchar(200),
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null,
id_usuario int not null,  -- Clave foránea
id_MesAño int not null,  -- Clave foránea
id_nombreOtro int not null,
id_EstadoPago int not null,
FOREIGN KEY (id_nombreOtro) REFERENCES Nombre_Otro(id_nombreOtro),
FOREIGN KEY (id_EstadoPago) REFERENCES EstadoPago(id_EstadoPago),
FOREIGN KEY (id_MesAño) REFERENCES Mes_Año(id_MesAño),
foreign key (id_usuario) references usuario(id_Usuario) 
);

CREATE TABLE Nombre_Otro (
    id_nombreOtro INT PRIMARY KEY AUTO_INCREMENT,
    nombreOtro VARCHAR(200) NOT NULL
);

-- tabla conectividad

create table Conectividad(
id_conectividad int primary key auto_increment not null,
montoConectividad varchar(200),
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null,
id_usuario int not null,  -- Clave foránea
id_MesAño int not null,  -- Clave foránea
id_nombreConectividad INT not null,
id_EstadoPago int not null,
FOREIGN KEY (id_EstadoPago) REFERENCES EstadoPago(id_EstadoPago),
FOREIGN KEY (id_nombreConectividad) REFERENCES Nombre_Conectividad(id_nombreConectividad),
FOREIGN KEY (id_MesAño) REFERENCES Mes_Año(id_MesAño),
foreign key (id_usuario) references usuario(id_Usuario) 
);

CREATE TABLE Nombre_Conectividad (
    id_nombreConectividad INT PRIMARY KEY AUTO_INCREMENT,
    nombreConectividad VARCHAR(200) NOT NULL
);

-- tabla educacion

Create table Educacion(
id_educacion int primary key auto_increment not null,
montoEducacion varchar(200),
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null,
id_usuario int not null,  -- Clave foránea
id_MesAño int not null,  -- Clave foránea
id_EstadoPago int not null,
id_nombreEducacion int not null,
FOREIGN KEY (id_nombreEducacion) REFERENCES Nombre_Educacion(id_nombreEducacion),
FOREIGN KEY (id_EstadoPago) REFERENCES EstadoPago(id_EstadoPago),
FOREIGN KEY (id_MesAño) REFERENCES Mes_Año(id_MesAño),
foreign key (id_usuario) references usuario(id_Usuario) 
);

CREATE TABLE Nombre_Educacion (
    id_nombreEducacion INT PRIMARY KEY AUTO_INCREMENT,
    nombreEducacion VARCHAR(200) NOT NULL
);

-- tabla vehiculos

create Table Vehiculos(
id_vehiculo int primary key auto_increment not null,
montoVehiculo varchar(200),
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null,
id_usuario int not null,  -- Clave foránea
id_MesAño int not null,  -- Clave foránea
id_EstadoPago int not null,
id_nombreVehiculo int not null,
FOREIGN KEY (id_nombreVehiculo) REFERENCES Nombre_Vehiculo(id_nombreVehiculo),
FOREIGN KEY (id_EstadoPago) REFERENCES EstadoPago(id_EstadoPago),
FOREIGN KEY (id_MesAño) REFERENCES Mes_Año(id_MesAño),
foreign key (id_usuario) references usuario(id_Usuario) 
);

CREATE TABLE Nombre_Vehiculo (
    id_nombreVehiculo INT PRIMARY KEY AUTO_INCREMENT,
    nombreVehiculo VARCHAR(200) NOT NULL
);

-- tabla deuda a pagar

Create table Deuda_Pagar(
id_DeudaPagar int primary key auto_increment not null,
montoDeudaPagar varchar(200),
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null,
id_usuario int not null,  -- Clave foránea
id_MesAño int not null,  -- Clave foránea
id_EstadoPago int not null,
id_nombreDeudaPagar int not null,
FOREIGN KEY (id_nombreDeudaPagar) REFERENCES Nombre_DeudaPagar(id_nombreDeudaPagar),
FOREIGN KEY (id_EstadoPago) REFERENCES EstadoPago(id_EstadoPago),
FOREIGN KEY (id_MesAño) REFERENCES Mes_Año(id_MesAño),
foreign key (id_usuario) references usuario(id_Usuario) 
);

CREATE TABLE Nombre_DeudaPagar (
    id_nombreDeudaPagar INT PRIMARY KEY AUTO_INCREMENT,
    nombreDeudaPagar VARCHAR(200) NOT NULL
);

-- tabla deuda a cobrar

Create table Deuda_Cobrar(
id_DeudaCobrar int primary key auto_increment not null,
montoDeudaCobrar varchar(200),
fechaVencimiento varchar(30),
fechaRegistro varchar(30) not null,
id_usuario int not null,  -- Clave foránea
id_MesAño int not null,  -- Clave foránea
id_EstadoPago int not null,
id_nombreDeudaCobrar int not null,
FOREIGN KEY (id_nombreDeudaCobrar) REFERENCES Nombre_DeudaCobrar(id_nombreDeudaCobrar),
FOREIGN KEY (id_EstadoPago) REFERENCES EstadoPago(id_EstadoPago),
FOREIGN KEY (id_MesAño) REFERENCES Mes_Año(id_MesAño),
foreign key (id_usuario) references usuario(id_Usuario) 
);

CREATE TABLE Nombre_DeudaCobrar (
    id_nombreDeudaCobrar INT PRIMARY KEY AUTO_INCREMENT,
    nombreDeudaCobrar VARCHAR(200) NOT NULL
);
