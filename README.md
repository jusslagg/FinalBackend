# Proyecto de E-commerce

Este proyecto es una aplicación de e-commerce construida con Node.js, Express y MongoDB. Permite a los usuarios navegar por productos, agregar productos al carrito, realizar pedidos y gestionar sus cuentas.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

*   `.gitignore`: Archivo que especifica los archivos y directorios que deben ser ignorados por Git.
*   `package-lock.json`: Archivo que registra las versiones exactas de las dependencias del proyecto.
*   `package.json`: Archivo que contiene la información del proyecto, las dependencias y los scripts de ejecución.
*   `test.js`: Archivo que contiene pruebas unitarias para el proyecto.
*   `server/`: Directorio que contiene el código del servidor.
    *   `package-lock.json`: Archivo que registra las versiones exactas de las dependencias del servidor.
    *   `package.json`: Archivo que contiene la información del servidor, las dependencias y los scripts de ejecución.
    *   `src/`: Directorio que contiene el código fuente del servidor.
        *   `app.js`: Archivo principal que inicia el servidor Express.
        *   `utils.js`: Archivo que contiene funciones de utilidad.
        *   `config/`: Directorio que contiene los archivos de configuración.
            *   `config.js`: Archivo que contiene la configuración general del servidor.
            *   `db.config.js`: Archivo que contiene la configuración de la base de datos MongoDB.
        *   `controller/`: Directorio que contiene los controladores de las rutas.
            *   `cart.controller.js`: Controlador para las rutas del carrito.
            *   `order.controller.js`: Controlador para las rutas de los pedidos.
            *   `product.controller.js`: Controlador para las rutas de los productos.
            *   `sessions.controller.js`: Controlador para las rutas de las sesiones de usuario.
            *   `user.controller.js`: Controlador para las rutas de los usuarios.
        *   `dao/`: Directorio que contiene los objetos de acceso a datos (DAOs).
            *   `cart.dao.js`: DAO para el carrito.
            *   `order.dao.js`: DAO para los pedidos.
            *   `product.dao.js`: DAO para los productos.
            *   `user.dao.js`: DAO para los usuarios.
            *   `dto/`: Directorio que contiene los objetos de transferencia de datos (DTOs).
                *   `cart.dto.js`: DTO para el carrito.
                *   `order.dto.js`: DTO para los pedidos.
                *   `product.dto.js`: DTO para los productos.
                *   `user.dto.js`: DTO para los usuarios.
            *   `models/`: Directorio que contiene los modelos de Mongoose.
                *   `cart.model.js`: Modelo para el carrito.
                *   `order.model.js`: Modelo para los pedidos.
                *   `product.model.js`: Modelo para los productos.
                *   `user.model.js`: Modelo para los usuarios.
        *   `repositories/`: Directorio que contiene los repositorios.
            *   `cart.repository.js`: Repositorio para el carrito.
            *   `order.repository.js`: Repositorio para los pedidos.
            *   `product.repository.js`: Repositorio para los productos.
            *   `user.repository.js`: Repositorio para los usuarios.
        *   `routes/`: Directorio que contiene las rutas.
            *   `cart.router.js`: Rutas para el carrito.
            *   `dictionary.router.js`: Rutas para el diccionario.
            *   `order.router.js`: Rutas para los pedidos.
            *   `product.router.js`: Rutas para los productos.
            *   `sessions.router.js`: Rutas para las sesiones de usuario.
            *   `user.router.js`: Rutas para los usuarios.
            *   `js/`: Directorio que contiene archivos JavaScript para las rutas.
                *   `router.js`: Archivo JavaScript para las rutas.

## Paso a Paso para Ejecutar el Proyecto

1.  **Clonar el repositorio:**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```
2.  **Instalar las dependencias:**

    ```bash
    npm install
    cd server
    npm install
    ```
3.  **Configurar las variables de entorno:**

    *   Crear un archivo `.env` en el directorio `server/`.
    *   Definir las variables de entorno necesarias, como la URL de la base de datos MongoDB, el puerto del servidor, etc. Puedes tomar como ejemplo el archivo `server/.env`.

4.  **Iniciar la base de datos MongoDB:**

    *   Asegúrate de tener MongoDB instalado y en ejecución.
    *   Configura la URL de conexión en el archivo `.env`.

5.  **Ejecutar el proyecto:**

    ```bash
    cd server
    npm start
    ```

    o

    ```bash
    node src/app.js
    ```

El servidor se iniciará en el puerto especificado en el archivo `.env` (por defecto, el puerto 8080).

## Endpoints de la API

La API ofrece los siguientes endpoints:

*   `GET /api/products`: Obtiene todos los productos.
*   `GET /api/products/:id`: Obtiene un producto por su ID.
*   `POST /api/cart`: Crea un nuevo carrito.
*   `GET /api/cart/:id`: Obtiene un carrito por su ID.
*   `POST /api/orders`: Crea un nuevo pedido.
*   `GET /api/orders/:id`: Obtiene un pedido por su ID.
*   `POST /api/users`: Crea un nuevo usuario.
*   `POST /api/sessions/register`: Registra un nuevo usuario.
*   `POST /api/sessions/login`: Inicia sesión un usuario existente.

## Tecnologías Utilizadas

*   Node.js
*   Express
*   MongoDB
*   Mongoose
*   Git
*   NPM

## Autor

[Tu Nombre]