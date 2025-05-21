import {Router} from 'express'; // Importa el Router de Express
import {getOrders, createOrder} from '../controller/order.controller.js'; // Importa las funciones del controlador de ordenes
import { authorize } from '../middleware/authorization.middleware.js';

const router = Router(); // Crea una instancia del Router de Express

// Ruta para obtener todas las ordenes - Solo ADMIN
router.get('/', authorize(["ADMIN"]), getOrders);


// Ruta para crear una orden
router.post('/', createOrder);


export default router; // Exporta el router