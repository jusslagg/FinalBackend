import orderRepository from "../repositories/order.repository.js";
import cartModel from "../dao/models/cart.model.js";
import productModel from "../dao/models/product.model.js";

const orderService = new orderRepository();

// Controlador para crear una orden
export const createOrder = async (req, res) => {
    const {userId, cartId} = req.body; // Extrae el userId y cartId del cuerpo de la solicitud

    try {
        let total = 0; // Inicializa el total
        const cart = await cartModel.findById(cartId).populate("products.product"); // Busca el carrito por su ID y popula los productos
        if(!cart) { // Si no se encuentra el carrito
            console.log("Carrito no encontrado");
            return res.status(404).send({status: "error", error: "Carrito no encontrado"}); // Retorna un error 404
        }

        console.log("Productos en el carrito:", cart.products); // Imprime los productos en el carrito
        

        for (const item of cart.products) { // Itera sobre los productos en el carrito
            if (!item.product) continue; // Si no hay producto, continua
        
            if (item.product.stock < item.quantity) { // Si no hay suficiente stock
            return res.status(400).send({ error: `Sin stock para ${item.product.nombre}` }); // Retorna un error 400
            }
        
            item.product.stock -= item.quantity; // Reduce el stock del producto
            await item.product.save(); // Guarda el producto
        
            total += item.product.precio * item.quantity; // Calcula el total
        }

        const order = await orderService.createOrder(userId, cartId, total); // Crea la orden
        console.log("Pedido creado con éxito:", order); // Imprime la orden creada
        res.send({status: "success", message: "Pedido creado con éxito"}); // Retorna un mensaje de éxito
        
    } catch (error) {
        res.status(500).send({status: "error", error: error.message}); // Retorna un error 500
    }
}

// Controlador para obtener las ordenes - Solo ADMIN
export const getOrders = async (req, res) => {
    const result = await orderService.getOrders(); // Llama al servicio para obtener las ordenes
    res.send({ status: "success", result }); // Retorna las ordenes
};

getOrders.allowedRoles = ["ADMIN"];