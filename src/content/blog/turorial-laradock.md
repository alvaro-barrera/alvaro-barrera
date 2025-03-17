---
author: Álvaro Barrera
pubDatetime: 2025-03-17T17:22:00Z
modDatetime: 2025-03-17T17:22:00Z
title: >-
  Tutorial: Configurar un proyecto Laravel con Laradock
slug: tutorial-configurar-proyecto-laradock
featured: false
draft: false
tags:
  - tutorial
  - laravel
  - laradock
description: >-
  Tutorial para instalar y configurar un proyecto con Laradock
order: 11
---

1. Clonar el repositorio de Laradock
   Primero, clona el repositorio de Laradock desde GitHub:

![Clonar laradock](/assets/tutorials/laradock/download-laradock.jpeg "Clonar laradock")

```
git clone https://github.com/Laradock/laradock
```

2. Mover Laradock a la carpeta del proyecto
   Ubica el directorio laradock al mismo nivel que tu carpeta de proyecto Laravel. La estructura de directorios debería quedar así:

![Mover laradock](/assets/tutorials/laradock/mkdir.jpeg "Mover carpeta")

```
/finance-app-back
  /finance-appp
  /laradock
```

3. Configurar la versión de PHP
   En el archivo .env dentro de Laradock, verifica y ajusta la versión de PHP que tu proyecto necesita. Puedes hacerlo modificando la variable PHP_VERSION según tus necesidades.

![ENV](/assets/tutorials/laradock/env.jpeg "ENV")
![Versión php](/assets/tutorials/laradock/version-php.jpeg "Versión php")

4. Configurar Nginx
   Navega a la carpeta laradock/nginx/sites y copia un archivo de configuración de ejemplo para tu nuevo proyecto. Puedes hacerlo con:

![NGNIX](/assets/tutorials/laradock/sites.jpeg "Configurar ngnix")

```
cp laravel.conf.example finance-api.conf
```

Edita el archivo recién creado:

Cambia server_name por el dominio que usarás (por ejemplo,finance-api.net).
Cambia la ruta de root por la carpeta de tu proyecto Laravel, algo similar a:

![server_name](/assets/tutorials/laradock/server-name.jpeg "Configurar server_name")

```
root /var/www/myproject/public;
```

5. Configurar Docker Desktop
   Asegúrate de tener [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y funcionando.

6. Iniciar contenedores con Docker Compose. 
   Asegurate de abrir Docker Desktop antes de este paso.
   Dependiendo de la base de datos que quieras utilizar, ejecuta uno de los siguientes comandos para levantar los contenedores:

![Docker build](/assets/tutorials/laradock/docker-build.jpeg "Correr docker-build")

![Docker build 2](/assets/tutorials/laradock/docker-build-2.jpeg "Correr docker-build 2")

![Docker build 3](/assets/tutorials/laradock/docker-build-3.jpeg "Correr docker-build 3")

![Docker build 4](/assets/tutorials/laradock/docker-build-4.jpeg "Correr docker-build 4")

```
docker-compose up -d --build nginx mysql
```

Para PostgreSQL:

```
docker-compose up -d --build nginx postgres
```

7. Ingresar al contenedor
   Una vez levantados los contenedores, ingresa al contenedor workspace con el siguiente comando:

![Docker bash](/assets/tutorials/laradock/docker-bash.jpeg "Correr docker bash")

![Docker bash 2](/assets/tutorials/laradock/docker-bash-2.jpeg "Correr docker bash 2")

```
docker-compose exec workspace bash
```

8. Crear el proyecto Laravel
   Dentro del contenedor, ejecuta el siguiente comando para crear un nuevo proyecto Laravel (ajusta finance-api al nombre de tu proyecto):

```
composer create-project --prefer-dist laravel/laravel finance-api
```

9. Configurar el archivo hosts
   En tu máquina local (fuera del contenedor), abre el archivo de hosts y agrega el dominio que declaraste en el archivo Nginx, algo como:

![HOSTS](/assets/tutorials/laradock/hosts.jpeg "Configurar hosts")
![HOSTS 2](/assets/tutorials/laradock/hosts-2.jpeg "Configurar hosts 2")
![HOSTS 3](/assets/tutorials/laradock/hosts-3.jpeg "Configurar hosts 3")

```
127.0.0.1    finance-api.net
```

Guarda los cambios.

10. Instalar dependencias en Laravel
    Una vez que hayas creado el proyecto Laravel, navega a la carpeta del proyecto y copia el archivo .env:

![Instalar app](/assets/tutorials/laradock/app-install.jpeg "Instalar app")

![Instalar app 2](/assets/tutorials/laradock/app-install-2.jpeg "Instalar app 2")

```
cp .env.example .env
```

Luego instala las dependencias de Composer:

![Instalar composer](/assets/tutorials/laradock/composer.jpeg "Instalar composer")

```
composer install
```

11. Configurar la base de datos en Laravel
    En el archivo .env de tu proyecto Laravel, actualiza las variables de conexión de base de datos para que se correspondan con la configuración de Laradock. Por ejemplo, para PostgreSQL:

```
DB_CONNECTION=pgsql
DB_HOST=postgres
DB_PORT=5432
DB_DATABASE=financedb
DB_USERNAME=default
DB_PASSWORD=secret
```

Puedes revisar la configuración desde el .env de laradock

![Laradock mysql](/assets/tutorials/laradock/laradock-mysql.jpeg "Laradock mysql")

![Laradock posgresql](/assets/tutorials/laradock/laradock-posgresql.jpeg "Laradock posgresql")

Asegúrate de que el nombre de la base de datos (DB_DATABASE) sea el mismo que crearás en el siguiente paso.

12. Crear la base de datos
    Ingresa al contenedor de PostgreSQL y crea la base de datos:

![Configurar postgres](/assets/tutorials/laradock/db.jpeg "Configurar postgres")

```
docker-compose exec postgres bash
  psql -U default
  create database financedb;
exit
```

13. Ejecutar migraciones y seeders
    Ejecuta las migraciones y genera el seed del proyecto dentro de la consulta bash, ingresando a la carpeta del proyecto laravel:

![Preparar laravel](/assets/tutorials/laradock/laravel-config.jpeg "Preparar laravel")

```
php artisan key:generate
php artisan migrate
```

14. Acceder a la aplicación en el navegador
    Abre tu navegador y accede a la aplicación usando el dominio que configuraste, por ejemplo:

![Navegar al sitio local](/assets/tutorials/laradock/localhost.jpeg "Navegar al sitio local")

```
http://finance-api.net
```

¡Listo! Tu aplicación Laravel ahora debería estar funcionando correctamente con Laradock y Docker.
