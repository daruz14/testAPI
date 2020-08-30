CREATE DATABASE test_api;

use test_api;

CREATE TABLE productos(
    id INT auto_increment PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    descripcion VARCHAR(5000),
    fecha_inicio DATETIME,
    fecha_termino DATETIME,
    precio INT,
    imagen VARCHAR(500),
    vendidos INT,
    tags VARCHAR(200)
);

CREATE TABLE busquedas(
    id INT auto_increment PRIMARY KEY,
    producto_id INT,
    palabra VARCHAR(2000),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Esto se debe modificar para cargar el archivo,
-- se debe usar la direccion donde se encuentre
LOAD DATA INFILE '/Users/daruz14/Documents/Projects/testAPI/backend/utils/data.csv' 
INTO TABLE productos 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;