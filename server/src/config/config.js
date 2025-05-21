import dotenv from 'dotenv'; // Importa la librería dotenv

dotenv.config(); // Carga las variables de entorno del archivo .env

export default {
    PORT: process.env.PORT || 8081, // Puerto de la aplicación, si no existe la variable de entorno, usa el puerto 8081
    URL_MONGO: process.env.MONGO_URL || 'mongodb+srv://admin:admin@cluster0.su6usvk.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0' // URL de la base de datos MongoDB, si no existe la variable de entorno, usa la URL por defecto
}