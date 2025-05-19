import { Router } from 'express';
import { getOrders, getOrderById, createOrder, resolveOrder, purchaseCart } from '../controller/order.controller.js';
import { authorize } from '../middleware/authorization.middleware.js';
import logger from '../config/logger.js';

const router = Router();

router.get('/', (req, res, next) => {
  logger.info('GET /api/order');
  next();
}, getOrders);
router.get('/:oid', (req, res, next) => {
  logger.info(`GET /api/order/${req.params.oid}`);
  next();
}, getOrderById);

router.post('/', authorize('user'),(req, res, next) => {
  logger.info('POST /api/order');
  next();
}, createOrder);
router.put('/:oid', (req, res, next) => {
  logger.info(`PUT /api/order/${req.params.oid}`);
  next();
}, resolveOrder);

router.post('/:cid/purchase', (req, res, next) => {
  logger.info(`POST /api/order/${req.params.cid}/purchase`);
  next();
}, purchaseCart);

export default router;