📁 Estructura del Proyecto
📦 proyecto-root/
├── 📄 .gitignore
├── 📄 package.json
├── 📄 package-lock.json
├── 🧪 test.js
├── 📁 server/
│   ├── 📄 package.json
│   ├── 📄 package-lock.json
│   └── 📁 src/
│       ├── 🚀 app.js
│       ├── 🛠️ utils.js
│       ├── 📁 config/
│       │   ├── ⚙️ config.js
│       │   └── 🗃️ db.config.js
│       ├── 📁 controller/
│       │   ├── 🛒 cart.controller.js
│       │   ├── 📦 order.controller.js
│       │   ├── 🛍️ product.controller.js
│       │   ├── 🔐 sessions.controller.js
│       │   └── 👥 user.controller.js
│       ├── 📁 dao/
│       │   ├── 🛒 cart.dao.js
│       │   ├── 📦 order.dao.js
│       │   ├── 🛍️ product.dao.js
│       │   ├── 👥 user.dao.js
│       │   └── 📁 dto/
│       │       ├── 🛒 cart.dto.js
│       │       ├── 📦 order.dto.js
│       │       ├── 🛍️ product.dto.js
│       │       └── 👥 user.dto.js
│       ├── 📁 models/
│       │   ├── 🛒 cart.model.js
│       │   ├── 📦 order.model.js
│       │   ├── 🛍️ product.model.js
│       │   └── 👥 user.model.js
│       ├── 📁 repositories/
│       │   ├── 🛒 cart.repository.js
│       │   ├── 📦 order.repository.js
│       │   ├── 🛍️ product.repository.js
│       │   └── 👥 user.repository.js
│       └── 📁 routes/
│           ├── 🛒 cart.router.js
│           ├── 📚 dictionary.router.js
│           ├── 📦 order.router.js
│           ├── 🛍️ product.router.js
│           ├── 🔐 sessions.router.js
│           ├── 👥 user.router.js
│           └── 📁 js/
│               └── 📄 router.js

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