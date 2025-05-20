import orderModel from './models/order.model.js';
import OrderDTO from './dto/order.dto.js';
import logger from '../config/logger.js'; // Usamos el logger que ya configuramos

export default class Order {

    // Obtener todas las órdenes
    getOrders = async () => {
        try {
            let orders = await orderModel.find();
            // Convertimos las órdenes a DTO para asegurar consistencia
            return orders.map(order => new OrderDTO(order));
        } catch (error) {
            logger.error(`Error al obtener las órdenes: ${error.message}`);
            return null;
        }
    }

    // Obtener una orden por ID
    getOrderById = async (id) => {
        try {
            let orderId;
            try {
                orderId = new mongoose.Types.ObjectId(id);
            } catch (error) {
                logger.error(`Invalid order ID ${id}: ${error.message}`);
                return null;
            }
            let order = await orderModel.findOne({ _id: orderId });
            if (order) {
                return new OrderDTO(order); // Devolvemos el DTO
            }
            return null;
        } catch (error) {
            logger.error(`Error al obtener la orden con ID ${id}: ${error.message}`);
            return null;
        }
    }

    // Guardar una nueva orden
    saveOrder = async (order) => {
        try {
            let orderToInsert = new OrderDTO(order); // Convertimos a DTO aquí
            let orderCreated = await orderModel.create(orderToInsert);
            return new OrderDTO(orderCreated); // Devolvemos el DTO después de crear la orden
        } catch (error) {
            logger.error(`Error al guardar la orden: ${error.message}`);
            return null;
        }
    }

    // Resolver una orden (actualizar su estado)
    resolveOrder = async (id, order) => {
        try {
            let orderUpdated = await orderModel.findOneAndUpdate({ _id: id }, { $set: order }, { new: true });
            // Si la orden fue actualizada, la retornamos en formato DTO
            if (orderUpdated) {
                return new OrderDTO(orderUpdated);
            }
            return null;
        } catch (error) {
            logger.error(`Error al resolver la orden con ID ${id}: ${error.message}`);
            return null;
        }
    }
}
