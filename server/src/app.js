import express from 'express';
import config from './config/config.js';
import userRouter from './routes/user.router.js';
import { current } from './middleware/current.middleware.js';
import orderRouter from './routes/order.router.js';
import connectDB from './config/db.config.js';
import logger from './config/logger.js';
import cors from 'cors';

const app = express();

// Conectar a la base de datos
const connection = connectDB(config.URL_MONGO);

// Habilitar CORS para que la API pueda ser consumida desde otros dominios
app.use(cors());

// Configuración del servidor
app.use(express.json()); // Para manejar cuerpos de solicitudes JSON
app.use(express.urlencoded({ extended: true })); // Para manejar datos URL codificados

// Middleware para obtener la información del usuario actual (si existe)
app.use(current);

// Rutas de la API
app.use('/api/user', userRouter);  // Rutas relacionadas con usuarios
app.use('/api/order', orderRouter); // Rutas relacionadas con órdenes

// Iniciar el servidor
app.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}`);
  logger.info(`Server listening on port ${config.PORT}`);
});
