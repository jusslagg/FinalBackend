import express from 'express'; // Importa la librería express
import config from './config/config.js'; // Importa la configuración de la aplicación
import userRouter from './routes/user.router.js'; // Importa el router de usuarios
import orderRouter from './routes/order.router.js'; // Importa el router de ordenes
import cartRouter from './routes/cart.router.js'; // Importa el router de carritos
import ProductRouter from './routes/product.router.js'; // Importa el router de productos
import connectDB from './config/db.config.js'; // Importa la función para conectar a la base de datos
import dictionaryRouter from './routes/dictionary.router.js'; // Importa el router de diccionario
import SessionRouter from './routes/sessions.router.js'; // Importa el router de sesiones


const app = express(); // Crea una instancia de express

// Configuración del servidor
app.use(express.json()); // Habilita el uso de JSON en las solicitudes
app.use(express.urlencoded({ extended: true })); // Habilita el uso de datos codificados en la URL

// Base de datos
const connection = connectDB(config.URL_MONGO); // Conecta a la base de datos

// Routers
app.use('/api/users', userRouter); // Usa el router de usuarios
app.use('/api/orders', orderRouter); // Usa el router de ordenes
app.use('/api/products', new ProductRouter().getRouter()); // Usa el router de productos
app.use('/api/carts', cartRouter); // Usa el router de carritos

app.use('/api/dictionary', dictionaryRouter); // Usa el router de diccionario
app.use('/api/session', (new SessionRouter()).getRouter()); // Usa el router de sesiones


app.use(express.json()); // Habilita el uso de JSON en las solicitudes

app.listen(config.PORT, () => { // Inicia el servidor
    console.log(`Server running on port ${config.PORT}`); // Imprime un mensaje en la consola
});
