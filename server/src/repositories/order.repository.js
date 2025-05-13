import OrderDao from "../dao/order.dao.js";
import OrderDTO from "../dao/dto/order.dto.js";

export default class OrderRepository {
    constructor() {
        this.dao = new OrderDao();
    }

    getOrders = async () => {
        let result = await this.dao.getOrders();
        return result;
    }

    getOrderById = async (id) => {
        let result = await this.dao.getOrderById(id);
        return result;
    }

    saveOrder = async (order) => {
        const orderToInsert = new OrderDTO(order);
        let result = await this.dao.saveOrder(orderToInsert);
        return result;
    }

    resolveOrder = async (id, order) => {
        const orderToUpdate = new OrderDTO(order);
        let result = await this.dao.resolveOrder(id, orderToUpdate);
        return result;
    }
}