import {Router} from 'express';
import {getCartById, createCart, deleteCart, addProductToCart, deleteProductFromCart} from '../controller/cart.controller.js'; // Importa las funciones del controlador de carritos
import { authorize } from '../middleware/authorization.middleware.js';

const router = Router(); // Crea una instancia del Router de Express

// Ruta para obtener un carrito por ID
router.get('/:cid', getCartById);

// Ruta para crear un nuevo carrito
router.post('/', createCart);

// Ruta para eliminar un carrito - Solo ADMIN
router.delete('/:cid', authorize(["ADMIN"]), deleteCart);

// Ruta para agregar un producto al carrito - USER and ADMIN
router.post('/:cid/product/:pid', authorize(["USER", "ADMIN"]), addProductToCart); // Solo usuarios y administradores pueden agregar productos al carrito

// Ruta para eliminar un producto del carrito
router.delete('/:cid/product/:pid', deleteProductFromCart); // Cualquiera puede eliminar productos del carrito

export default router;