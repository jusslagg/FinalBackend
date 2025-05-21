import orderDTO from "../dao/dto/order.dto.js";
import orderDao from "../dao/order.dao.js";

export default class orderRepository {
    constructor () {
        this.dao =new orderDao();
    }

    createOrder = async (userId, cartId, total) => {
        const orderData = {
            user: userId,
            cart: cartId,
            total: total
        };
        const newOrder = await this.dao.createOrder(orderData);
        return new orderDTO(newOrder);
    }

    getOrderById  = async (id) =>{
        const order = await this.dao.getOrderById (id);
        return new orderDTO(order);
    }
}