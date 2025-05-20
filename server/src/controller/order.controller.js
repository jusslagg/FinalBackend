import orderRepository from "../repositories/order.repository.js";
import cartModel from "../dao/models/cart.model.js";
import productModel from "../dao/models/product.model.js";

const orderService = new orderRepository();

export const createOrder = async (req, res) => {
    const {userId, cartId} = req.body;

    try {
        let total = 0;
        const cart = await cartModel.findById(cartId).populate("products.product");
        if(!cart) {
            console.log("Carrito no encontrado");
            return res.status(404).send({status: "error", error: "Carrito no encontrado"});
        }

        console.log("Productos en el carrito:", cart.products);
        

        for (const item of cart.products) {
            if (!item.product) continue;
        
            if (item.product.stock < item.quantity) {
            return res.status(400).send({ error: `Sin stock para ${item.product.nombre}` });
            }
        
            item.product.stock -= item.quantity;
            await item.product.save();
        
            total += item.product.precio * item.quantity;
        }

        const order = await orderService.createOrder(userId, cartId, total);
        console.log("Pedido creado con éxito:", order);
        res.send({status: "success", message: "Pedido creado con éxito"});
        
    } catch (error) {
        res.status(500).send({status: "error", error: error.message});
    }
}


export const getOrders = async (req, res) => {
    const result = await orderService.getOrders();
    res.send({ status: "success", result });
};