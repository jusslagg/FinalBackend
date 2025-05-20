import cartRepository from '../repositories/cart.repository.js';
import productModel from '../dao/models/product.model.js';
import cartModel from '../dao/models/cart.model.js';

const cartService = new cartRepository();


export const getCartById = async (req, res) => {
    const {cid} = req.params;
    let result = await cartService.getCartById(cid);
    if (!result) {
        return res.status(404).send({ status: "error", message: "Carrito no encontrado" });
    }
    res.send({status: "success", result});
}

export const createCart = async (req, res) => {
    const cart = req.body;
    let result = await cartService.createCart(cart);

    if(!result) {
        return res.status(400).send({ error: "No se pudo crear el carrito" });
    }
    res.send({status: "success", result});
}

export const deleteCart = async (req, res) => {
    const {cid} = req.params;
    let result = await cartService.deleteCart(cid);
    res.send({status: "success", result});
}



export const addProductToCart = async (req, res) => {
    const {cid, pid} = req.params;
    const { quantity } = req.body;
    console.log("Controller:", cid, pid, quantity);

    let result = await cartService.addProductToCart(cid, pid, quantity ||1);
    
    res.send({status: "success", result});
}

export const deleteProductFromCart = async (req, res) => {
    const {cid, pid} = req.params;
    let result = await cartService.deleteProductFromCart(cid, pid);
    res.send({status: "success", result});
}


