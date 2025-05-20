export default class CartDTO {
    constructor(cart) {
        this.id = cart._id || nul;
        this.products = cart.products || [];
    }
}