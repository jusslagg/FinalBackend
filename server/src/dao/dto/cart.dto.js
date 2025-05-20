export default class CartDTO {
    constructor(cart = {}) {
        this.id = cart._id || null;
        this.products = Array.isArray(cart.products) ? cart.products : [];
    }
}
