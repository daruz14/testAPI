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
export PORT=3001
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
export PORT_BACKEND=3001
```

Se debe ejecutar `source .env`

## Endpoints

Backend:
```
/api/v1/products  --> para buscar productos
/api/v1/stadistics  --> para ver las estadísticas de las búsquedas
```

Frontend:
```
/search  --> para buscar productos
/stadistics  --> para ver las estadísticas de las búsquedas
```

## NOTA!

Por alguna extraña razón, al querer probar la vista de `stadistics` en el frontend, el fetch con el backend tiraba un error de conexión, pero que no sucede en la vista `search`, ni tampoco cuando se ejecuta sin docker, no se pudo encontrar bien el error dado que reclamaba por una libreria :/ y no tenía más tiempo. Por lo mismo se recomienda probar las vistas levantando de forma manual sin docker el frontend. Para esto se puede levantar el servicio
```
docker-compose up --build
docker-compose stop test_front

En otra terminal o pestaña
cd frontend
yarn dev
```