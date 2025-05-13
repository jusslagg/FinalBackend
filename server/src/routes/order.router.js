import { Router } from 'express';
import { getOrders, getOrderById, createOrder, resolveOrder } from '../controller/order.controller.js';
import { authorize } from '../middleware/authorization.middleware.js';

const router = Router();

router.get('/', getOrders);
router.get('/:oid', getOrderById);

router.post('/', authorize('user'), createOrder);
router.put('/:oid', resolveOrder);

router.post('/:cid/purchase', purchaseCart);

export default router;