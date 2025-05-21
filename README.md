📁 Estructura del Proyecto

*   .gitignore: Archivo que especifica los archivos y directorios que deben ser ignorados por Git.  Ayuda a evitar que archivos innecesarios o sensibles (como archivos de configuración con contraseñas) sean accidentalmente subidos al repositorio.
*   package-lock.json: Archivo que registra las versiones exactas de las dependencias del proyecto.  Asegura que todos los que trabajen en el proyecto utilicen las mismas versiones de las dependencias, evitando problemas de compatibilidad.
*   package.json: Archivo que contiene la información del proyecto, las dependencias y los scripts de ejecución. Define el nombre del proyecto, la versión, las dependencias necesarias y los comandos para ejecutar tareas comunes como iniciar el servidor o ejecutar pruebas.
*   test.js: Archivo que contiene pruebas unitarias para el proyecto.  Permite verificar que las diferentes partes del código funcionan correctamente y cumplen con las especificaciones.
*   server/: Directorio que contiene el código del servidor.  Encapsula toda la lógica del lado del servidor, incluyendo las rutas, los controladores, los modelos de datos y la configuración de la base de datos.
    *   package-lock.json: Archivo que registra las versiones exactas de las dependencias del servidor.  Similar al package-lock.json en la raíz del proyecto, pero específico para las dependencias del servidor.
    *   package.json: Archivo que contiene la información del servidor, las dependencias y los scripts de ejecución.  Define las dependencias y los scripts necesarios para ejecutar el servidor.
    *   src/: Directorio que contiene el código fuente del servidor.  Organiza el código del servidor en diferentes módulos y componentes.
        *   app.js: Archivo principal que inicia el servidor Express.  Crea la instancia de Express, define las rutas principales y conecta el servidor a la base de datos.
        *   utils.js: Archivo que contiene funciones de utilidad.  Proporciona funciones reutilizables que se utilizan en diferentes partes del servidor, como la validación de datos o el formateo de respuestas.
        *   config/: Directorio que contiene los archivos de configuración.  Almacena la configuración del servidor y de la base de datos, como las credenciales de acceso y las opciones de conexión.
            *   config.js: Archivo que contiene la configuración general del servidor.  Define variables de entorno y opciones de configuración para el servidor.
            *   db.config.js: Archivo que contiene la configuración de la base de datos MongoDB.  Especifica la URL de conexión a la base de datos y las opciones de configuración.
        *   controller/: Directorio que contiene los controladores de las rutas.  Maneja las peticiones HTTP y las respuestas, interactuando con los modelos de datos y los servicios para procesar la lógica de la aplicación.
            *   cart.controller.js: Controlador para las rutas del carrito.  Gestiona la creación, la lectura, la actualización y la eliminación de carritos de compra.
            *   order.controller.js: Controlador para las rutas de los pedidos.  Gestiona la creación, la lectura, la actualización y la eliminación de pedidos.
            *   product.controller.js: Controlador para las rutas de los productos.  Gestiona la creación, la lectura, la actualización y la eliminación de productos.
            *   sessions.controller.js: Controlador para las rutas de las sesiones de usuario.  Gestiona el inicio de sesión, el registro y el cierre de sesión de los usuarios.
            *   user.controller.js: Controlador para las rutas de los usuarios.  Gestiona la creación, la lectura, la actualización y la eliminación de usuarios.
        *   dao/: Directorio que contiene los objetos de acceso a datos (DAOs).  Proporciona una capa de abstracción para acceder a la base de datos, permitiendo cambiar la implementación de la base de datos sin afectar el resto del código.
            *   cart.dao.js: DAO para el carrito.  Implementa los métodos para acceder a los datos del carrito en la base de datos.
            *   order.dao.js: DAO para los pedidos.  Implementa los métodos para acceder a los datos de los pedidos en la base de datos.
            *   product.dao.js: DAO para los productos.  Implementa los métodos para acceder a los datos de los productos en la base de datos.
            *   user.dao.js: DAO para los usuarios.  Implementa los métodos para acceder a los datos de los usuarios en la base de datos.
            *   dto/: Directorio que contiene los objetos de transferencia de datos (DTOs).  Define la estructura de los datos que se transfieren entre las diferentes capas de la aplicación.
                *   cart.dto.js: DTO para el carrito.  Define la estructura de los datos del carrito que se transfieren entre las capas.
                *   order.dto.js: DTO para los pedidos.  Define la estructura de los datos de los pedidos que se transfieren entre las capas.
                *   product.dto.js: DTO para los productos.  Define la estructura de los datos de los productos que se transfieren entre las capas.
                *   user.dto.js: DTO para los usuarios.  Define la estructura de los datos de los usuarios que se transfieren entre las capas.
            *   models/: Directorio que contiene los modelos de Mongoose.  Define la estructura de los datos en la base de datos MongoDB.
                *   cart.model.js: Modelo para el carrito.  Define la estructura de los datos del carrito en la base de datos.
                *   order.model.js: Modelo para los pedidos.  Define la estructura de los datos de los pedidos en la base de datos.
                *   product.model.js: Modelo para los productos.  Define la estructura de los datos de los productos en la base de datos.
                *   user.model.js: Modelo para los usuarios.  Define la estructura de los datos de los usuarios en la base de datos.
        *   repositories/: Directorio que contiene los repositorios.  Proporciona una capa de abstracción para acceder a los DAOs, permitiendo cambiar la implementación de los DAOs sin afectar el resto del código.
            *   cart.repository.js: Repositorio para el carrito.  Implementa los métodos para acceder a los DAOs del carrito.
            *   order.repository.js: Repositorio para los pedidos.  Implementa los métodos para acceder a los DAOs de los pedidos.
            *   product.repository.js: Repositorio para los productos.  Implementa los métodos para acceder a los DAOs de los productos.
            *   user.repository.js: Repositorio para los usuarios.  Implementa los métodos para acceder a los DAOs de los usuarios.
        *   routes/: Directorio que contiene las rutas.  Define las rutas de la API y las funciones que se ejecutan cuando se accede a cada ruta.
            *   cart.router.js: Rutas para el carrito.  Define las rutas para crear, leer, actualizar y eliminar carritos.
            *   dictionary.router.js: Rutas para el diccionario.  Define las rutas para acceder a un diccionario de datos.
            *   order.router.js: Rutas para los pedidos.  Define las rutas para crear, leer, actualizar y eliminar pedidos.
            *   product.router.js: Rutas para los productos.  Define las rutas para crear, leer, actualizar y eliminar productos.
            *   sessions.router.js: Rutas para las sesiones de usuario.  Define las rutas para iniciar sesión, registrar y cerrar sesión.
            *   user.router.js: Rutas para los usuarios.  Define las rutas para crear, leer, actualizar y eliminar usuarios.
            *   js/: Directorio que contiene archivos JavaScript para las rutas.  Almacena archivos JavaScript que se utilizan en las rutas.
                *   router.js: Archivo JavaScript para las rutas.  Define la lógica para manejar las rutas.

🧭 Paso a Paso para Ejecutar el Proyecto
🧬 Clonar el repositorio:
git clone <URL_DEL_REPOSITORIO>

📦 Instalar las dependencias:
npm install
cd server
npm install

⚙️ Configurar las variables de entorno:

Crea un archivo .env dentro de server/

Define las variables necesarias, como la URL de la base de datos y el puerto

🛠️ Iniciar la base de datos MongoDB:

Asegúrate de tener MongoDB en ejecución

Verifica la conexión en el .env

🚀 Ejecutar el servidor:
cd server
npm start
📡 El servidor correrá en el puerto definido en el .env (por defecto 8081)

📡 Endpoints de la API
Método	Ruta	Descripción
GET	/api/products	Obtener todos los productos
GET	/api/products/:id	Obtener un producto por ID
POST	/api/cart	Crear un nuevo carrito
GET	/api/cart/:id	Obtener un carrito por ID
POST	/api/orders	Crear un nuevo pedido
GET	/api/orders/:id	Obtener un pedido por ID
POST	/api/users	Crear un nuevo usuario
POST	/api/sessions/register	Registrar un nuevo usuario
POST	/api/sessions/login	Iniciar sesión

🛠️ Tecnologías Utilizadas
⚙️ Node.js

🌐 Express

🍃 MongoDB

📦 Mongoose

🧪 Git

📁 NPM

👨‍💻 Autor
Jesús Gil
💼 Desarrollador Full Stack |