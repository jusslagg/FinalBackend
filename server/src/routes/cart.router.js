import {Router} from 'express';
import {getCartById, createCart, deleteCart, addProductToCart, deleteProductFromCart} from '../controller/cart.controller.js';

const router = Router();

router.get('/:cid', getCartById);

router.post('/', createCart);

router.delete('/:cid', deleteCart);

router.post('/:cid/product/:pid', addProductToCart);

router.delete('/:cid/product/:pid', deleteProductFromCart);

export default router;