import {Router} from 'express';
import {getProduct, getProductById, createProduct, updateProduct, deleteProduct} from '../controller/product.controller.js';

const router = Router();

//obtener productos
router.get('/', getProduct);


//obtener un producto
router.get('/:pid', getProductById);


//crear producto
router.post('/', createProduct);


//actualizar un producto
router.put('/:pid', updateProduct);


//borrar un producto
router.delete('/:pid', deleteProduct);

export default router;