import {Router} from 'express';
import {getOrders, createOrder} from '../controller/order.controller.js';

const router = Router();

//obtener ordenes
router.get('/', getOrders);


//crear orden
router.post('/', createOrder);


export default router;