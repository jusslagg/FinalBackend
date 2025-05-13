export default class OrderDTO {

    constructor(order) {
        this.number = order.number;
        this.business = order.business;
        this.user = order.user;
        this.products = order.products;
        this.totalPrice = order.totalPrice;
        this.status = order.status;
    }

}