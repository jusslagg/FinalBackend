// DTO para la orden
export default class OrderDTO{
    constructor(order){
        // Mapea los datos de la orden al DTO
        this.id = order._id; // ID de la orden
            this.user = order.user; // Usuario que realizó la orden
            this.cart = order.cart; // Carrito asociado a la orden
            this.total = order.total; // Total de la orden
            this.createdAt = order.createdAt; // Fecha de creación de la orden
    }
}