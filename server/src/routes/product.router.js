import Router from './js/router.js'; // Importa la clase Router personalizada
import {
  getProduct, // Importa la función para obtener todos los productos
  getProductById, // Importa la función para obtener un producto por ID
  createProduct, // Importa la función para crear un producto
  updateProduct, // Importa la función para actualizar un producto
  deleteProduct // Importa la función para eliminar un producto
} from '../controller/product.controller.js'; // Importa las funciones del controlador de productos
import { authorize } from '../middleware/authorization.middleware.js';

export default class ProductRouter extends Router { // Exporta la clase ProductRouter
  init() {
    // 📦 Rutas Públicas
    this.get('/', ["PUBLIC"], getProduct); // Ruta para obtener todos los productos, accesible para todos
    this.get('/:pid', ["PUBLIC"], getProductById); // Ruta para obtener un producto por ID, accesible para todos

    // 🔒 Rutas Solo ADMIN
    this.post('/', ["ADMIN"], createProduct); // Ruta para crear un producto, solo accesible para administradores
    this.put('/:pid', ["ADMIN"], updateProduct); // Ruta para actualizar un producto, solo accesible para administradores
    this.delete('/:pid', authorize(["ADMIN"]), deleteProduct); // Ruta para eliminar un producto, solo accesible para administradores
  }
}