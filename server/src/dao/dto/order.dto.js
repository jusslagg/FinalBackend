export default class OrderDTO {
  constructor(order) {
    this.id = order._id;
    this.user = order.user; // puede ser un ObjectId o un objeto poblado
    this.cart = order.cart; // debería ser un array de productos o referencia
    this.total = order.total;
    this.createdAt = order.createdAt;
  }
}
