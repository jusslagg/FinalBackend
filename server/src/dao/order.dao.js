import orderModel from '../dao/models/order.model.js';

export default class Order {
  
  // Crear una nueva orden
  createOrder = async (order) => {
    try {
      const createdOrder = await orderModel.create(order);
      return createdOrder;
    } catch (error) {
      console.error("Error al crear la orden:", error);
      throw new Error("Error al crear la orden");
    }
  }

  // Obtener todas las órdenes, con paginación y filtrado
  getOrders = async (page = 1, limit = 10, filters = {}) => {
    try {
      const orders = await orderModel.find(filters)
        .populate("user")
        .populate("cart")
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 }); // Ordenar por fecha de creación descendente
      
      return orders;
    } catch (error) {
      console.error("Error al obtener las órdenes:", error);
      throw new Error("Error al obtener las órdenes");
    }
  }

  // Obtener una orden por ID
  getOrderById = async (id) => {
    try {
      const order = await orderModel.findById(id).populate("user").populate("cart");
      return order;
    } catch (error) {
      console.error("Error al obtener la orden:", error);
      return null;
    }
  }

  // Eliminar una orden por ID
  deleteOrder = async (id) => {
    try {
      const result = await orderModel.deleteOne({ _id: id });
      return result.deletedCount > 0; // Retorna true si la orden fue eliminada
    } catch (error) {
      console.error("Error al eliminar la orden:", error);
      return false;
    }
  }

  // Actualizar una orden por ID
  updateOrder = async (id, updateData) => {
    try {
      const result = await orderModel.updateOne({ _id: id }, { $set: updateData });
      return result.nModified > 0; // Retorna true si la orden fue actualizada
    } catch (error) {
      console.error("Error al actualizar la orden:", error);
      return false;
    }
  }
}
