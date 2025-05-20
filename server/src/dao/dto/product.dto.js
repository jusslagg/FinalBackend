export default class ProductDTO {
  constructor(product) {
    this.id = product._id; // Incluye el _id como 'id'
    this.nombre = product.nombre;
    this.precio = product.precio;
    this.stock = product.stock;
    this.categoria = product.categoria;
  }
}
