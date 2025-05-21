import orderModel from '../dao/models/order.model.js';

export default class Order{

    // Crea una orden
    createOrder = async (order) => {
        try {
            let createdOrder = await orderModel.create(order); // Crea la orden en la base de datos
            return createdOrder // Retorna la orden creada

        } catch (error) {
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }

    // Obtiene todas las ordenes
    getOrders  =async () => {
        try {
            return await orderModel.find().populate("user").populate("cart"); // Busca todas las ordenes y popula los campos de usuario y carrito
        } catch (error) {
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }
}

