export default class OrderDTO{
    constructor(order){
        this.id = order._id;
            this.user = order.user;
            this.cart = order.cart;
            this.total = order.total;
            this.createdAt = order.createdAt;
    }
}