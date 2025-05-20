import cartRepository from '../repositories/cart.repository.js';
import productModel from '../dao/models/product.model.js';
import cartModel from '../dao/models/cart.model.js';

const cartService = new cartRepository();

export const getCartById = async (req, res) => {
    try {
        const { cid } = req.params;
        const result = await cartService.getCartById(cid);
        if (!result) {
            return res.status(404).send({ status: "error", message: "Carrito no encontrado" });
        }
        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al obtener carrito:", error);
        res.status(500).send({ status: "error", message: "Error interno del servidor" });
    }
};

export const createCart = async (req, res) => {
    try {
        const cart = req.body;
        if (!cart || typeof cart !== 'object') {
            return res.status(400).send({ status: "error", message: "Datos del carrito inválidos" });
        }

        const result = await cartService.createCart(cart);
        if (!result) {
            return res.status(400).send({ error: "No se pudo crear el carrito" });
        }

        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al crear carrito:", error);
        res.status(500).send({ status: "error", message: "Error interno del servidor" });
    }
};

export const deleteCart = async (req, res) => {
    try {
        const { cid } = req.params;
        const result = await cartService.deleteCart(cid);
        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al eliminar carrito:", error);
        res.status(500).send({ status: "error", message: "Error interno del servidor" });
    }
};

export const addProductToCart = async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const { quantity } = req.body;

        console.log("Controller:", cid, pid, quantity);

        // Validar existencia del producto
        const product = await productModel.findById(pid);
        if (!product) {
            return res.status(404).send({ status: "error", message: "Producto no encontrado" });
        }

        const result = await cartService.addProductToCart(cid, pid, quantity || 1);
        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al agregar producto al carrito:", error);
        res.status(500).send({ status: "error", message: "Error interno del servidor" });
    }
};

export const deleteProductFromCart = async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const result = await cartService.deleteProductFromCart(cid, pid);
        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al eliminar producto del carrito:", error);
        res.status(500).send({ status: "error", message: "Error interno del servidor" });
    }
};
