import Router from './js/router.js'; // Tu clase personalizada
import {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controller/product.controller.js';

export default class ProductRouter extends Router {
  init() {
    // 📦 Público
    this.get('/', ["PUBLIC"], getProduct);
    this.get('/:pid', ["PUBLIC"], getProductById);

    // 🔒 Solo ADMIN
    this.post('/', ["ADMIN"], createProduct);
    this.put('/:pid', ["ADMIN"], updateProduct);
    this.delete('/:pid', ["ADMIN"], deleteProduct);
  }
}