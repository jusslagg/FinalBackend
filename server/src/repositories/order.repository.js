import OrderDao from "../dao/order.dao.js";
import OrderDTO from "../dao/dto/order.dto.js";
import logger from "../config/logger.js";  // Usamos logger para manejar errores

export default class OrderRepository {
    constructor() {
        this.dao = new OrderDao();
    }

    // Método para obtener todas las órdenes
    getOrders = async () => {
        try {
            const result = await this.dao.getOrders();
            return result;
        } catch (error) {
            logger.error(`Error getting orders: ${error.message}`);
            throw new Error("Error fetching orders");
        }
    };

    // Método para obtener una orden por ID
    getOrderById = async (id) => {
        try {
            const result = await this.dao.getOrderById(id);
            if (!result) {
                throw new Error(`Order with ID ${id} not found`);
            }
            return result;
        } catch (error) {
            logger.error(`Error getting order by ID ${id}: ${error.message}`);
            throw new Error("Error fetching order by ID");
        }
    };

    // Método para guardar una nueva orden
    saveOrder = async (order) => {
        try {
            // Verificación básica antes de insertar
            if (!order.number || !order.user || !order.products || !order.totalPrice) {
                throw new Error("Missing required fields for order");
            }

            const orderToInsert = new OrderDTO(order);
            const result = await this.dao.saveOrder(orderToInsert);
            return result;
        } catch (error) {
            logger.error(`Error saving order: ${error.message}`);
            throw new Error("Error saving order");
        }
    };

    // Método para resolver o actualizar el estado de una orden
    resolveOrder = async (id, order) => {
        try {
            const orderToUpdate = new OrderDTO(order);
            const result = await this.dao.resolveOrder(id, orderToUpdate);
            return result;
        } catch (error) {
            logger.error(`Error resolving order with ID ${id}: ${error.message}`);
            throw new Error("Error resolving order");
        }
    };
}
