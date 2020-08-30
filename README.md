# TestAPI

Este proyecto esta compuesto de dos partes:

1. Backend
2. Frontend


### Backend

Desarrollado en Node Js, junto con el framework Express Js y utilizando una DB en MySQL. Por esto es necesario instalar MySQL, posteriormente crear una database con nombre a elegir (Es importante guardar esta variable en el archivo .env que se usará de ejemplo).

#### Configuración DB

Para hacer las instalaciones de migraciones de la Database, basta con ejecutar el archivo `.sql` que se puede encontrar en `backend/utils`, creando la database necesaria, las tablas correspondientes y cargando el archivo `data.csv` encontrado en la misma dirección del script. Importante, antes de ejecutar `database_init.sql` se debe modificar el `path` que se tiene, con la correcta del archivo `data.csv`

```bash
mysql -u root -p < database_init.sql
```


#### ENV FILE
La estructura del archivo `.env` corresponde:

```bash
export DB_HOST=
export DB_USER=
export DB_PASS=
export DB_NAME=
export PORT=
```

Se debe ejecutar `source .env`, esto solamente en caso de no ejecutarse con `Docker`. En caso de que se use la app sin `Docker`, el host debe ser `127.0.0.1`, mientras que con `Docker` es `host.docker.internal`.

#### Ejecutar

Para ejecutar la aplicación hay dos opciones, en caso de correr de forma local solo se usa:

```bash
npm start
```

La otra opción es ejecutarlo utilizando `Docker`, con lo cual se debe ejecutar:

```bash
docker-compose up --build
```

### Frontend

#### ENV FILE
La estructura del archivo `.env` corresponde:

```bash
export DB_HOST=
export DB_USER=
export DB_PASS=
export DB_NAME=
```

Se debe ejecutar `source .env`