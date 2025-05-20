import orderDTO from "../dao/dto/order.dto.js";
import orderDao from "../dao/order.dao.js";

export default class OrderRepository {
  constructor() {
    this.dao = new orderDao();
  }

  // Crear una nueva orden
  createOrder = async (userId, cartId, total) => {
    try {
      const orderData = {
        user: userId,
        cart: cartId,
        total: total
      };

      const newOrder = await this.dao.createOrder(orderData);
      return new orderDTO(newOrder); // Retorna el DTO
    } catch (error) {
      console.error("Error al crear la orden:", error);
      throw new Error("Error al crear la orden");
    }
  }

  // Obtener todas las órdenes, con soporte de paginación y filtros
  getOrders = async (page = 1, limit = 10, filters = {}) => {
    try {
      const orders = await this.dao.getOrders(page, limit, filters);
      return orders.map(order => new orderDTO(order)); // Retorna los DTOs
    } catch (error) {
      console.error("Error al obtener las órdenes:", error);
      throw new Error("Error al obtener las órdenes");
    }
  }

  // Obtener una orden por su ID
  getOrderById = async (id) => {
    try {
      const order = await this.dao.getOrderById(id);
      if (!order) {
        throw new Error("Orden no encontrada");
      }
      return new orderDTO(order); // Retorna el DTO de la orden
    } catch (error) {
      console.error("Error al obtener la orden por ID:", error);
      throw new Error("Error al obtener la orden por ID");
    }
  }

  // Eliminar una orden por su ID
  deleteOrder = async (id) => {
    try {
      const deleted = await this.dao.deleteOrder(id);
      if (!deleted) {
        throw new Error("No se pudo eliminar la orden");
      }
      return { status: "success", message: "Orden eliminada correctamente" };
    } catch (error) {
      console.error("Error al eliminar la orden:", error);
      throw new Error("Error al eliminar la orden");
    }
  }

  // Actualizar una orden
  updateOrder = async (id, updateData) => {
    try {
      const updated = await this.dao.updateOrder(id, updateData);
      if (!updated) {
        throw new Error("No se pudo actualizar la orden");
      }
      return { status: "success", message: "Orden actualizada correctamente" };
    } catch (error) {
      console.error("Error al actualizar la orden:", error);
      throw new Error("Error al actualizar la orden");
    }
  }
}
