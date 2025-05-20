import { Router } from 'express';
import { getOrders, getOrderById, resolveOrder } from '../controller/order.controller.js';
import { authorize } from '../middleware/authorization.middleware.js';
import logger from '../config/logger.js';

// Router initialization
const router = Router();

// Middleware global de logging
router.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});

// Rutas para obtener órdenes
router.get('/', getOrders);
router.get('/:oid', getOrderById);

// Ruta para resolver una orden (por ejemplo, completarla o cancelarla)
router.put('/:oid', resolveOrder);

// // Ruta para comprar un carrito de compras
// router.post('/:cid/purchase', purchaseCart);

export default router;
