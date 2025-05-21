import orderDTO from "../dao/dto/order.dto.js"; // Importa el DTO de orden
import orderDao from "../dao/order.dao.js"; // Importa el DAO de orden

// Clase para el repositorio de orden
export default class orderRepository {
    constructor () {
        this.dao =new orderDao(); // Crea una instancia del DAO de orden
    }

    // Crea una orden
    createOrder = async (userId, cartId, total) => {
        const orderData = { // Crea un objeto con los datos de la orden
            user: userId, // ID del usuario
            cart: cartId, // ID del carrito
            total: total // Total de la orden
        };
        const newOrder = await this.dao.createOrder(orderData); // Crea la orden usando el DAO
        return new orderDTO(newOrder); // Retorna la orden como un DTO
    }

    // Obtiene todas las ordenes
    getOrders  = async () =>{
        const orders = await this.dao.getOrders (); // Obtiene todas las ordenes usando el DAO
        return orders.map(order => new orderDTO(order)); // Retorna las ordenes como un array de DTOs
    }
}