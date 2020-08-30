# TestAPI

Este proyecto esta compuesto de dos partes:

1. Backend
2. Frontend


### Backend

Desarrollado en Node Js, junto con el framework Express Js y utilizando una DB en MySQL. Por esto es necesario instalar MySQL, posteriormente crear una database con nombre a elegir (Es importante guardar esta variable en el archivo .env que se usará de ejemplo).

#### ENV FILE
La estructura del archivo `.env` corresponde:

```bash
export DB_HOST=
export DB_USER=
export DB_PASS=
export DB_NAME=
```

Se debe ejecutar `source .env`

#### Migraciones

Para hacer las instalaciones de migraciones de la Database, basta con ejecutar el archivo `.sql` que se puede encontrar en `backend/utils/data.csv`.

#### Ejecutar

Para correr el backend se debe ejecutar `npm start`


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