import cartRepository from '../repositories/cart.repository.js';
import productModel from '../dao/models/product.model.js';
import cartModel from '../dao/models/cart.model.js';
import { authorize } from '../middleware/authorization.middleware.js';

const cartService = new cartRepository();


// Obtiene un carrito por su ID
export const getCartById = async (req, res) => {
    const {cid} = req.params; // Extrae el ID del carrito de los parámetros de la solicitud
    let result = await cartService.getCartById(cid); // Llama al servicio para obtener el carrito
    if (!result) { // Si no se encuentra el carrito
        return res.status(404).send({ status: "error", message: "Carrito no encontrado" }); // Retorna un error 404
    }
    res.send({status: "success", result}); // Retorna el carrito si se encuentra
}

// Crea un nuevo carrito
export const createCart = async (req, res) => {
    const cart = req.body; // Extrae el carrito del cuerpo de la solicitud
    let result = await cartService.createCart(cart); // Llama al servicio para crear el carrito

    if(!result) { // Si no se pudo crear el carrito
        return res.status(400).send({ error: "No se pudo crear el carrito" }); // Retorna un error 400
    }
    res.send({status: "success", result}); // Retorna el carrito creado
}

// Elimina un carrito - Solo ADMIN
export const deleteCart = async (req, res) => {
    const {cid} = req.params; // Extrae el ID del carrito de los parámetros de la solicitud
    let result = await cartService.deleteCart(cid); // Llama al servicio para eliminar el carrito
    res.send({status: "success", result}); // Retorna el resultado de la eliminación
}


// Agrega un producto al carrito
export const addProductToCart = async (req, res) => {
    const {cid, pid} = req.params; // Extrae el ID del carrito y del producto de los parámetros de la solicitud
    const { quantity } = req.body; // Extrae la cantidad del cuerpo de la solicitud
    console.log("Controller:", cid, pid, quantity); // Imprime en la consola los IDs y la cantidad

    let result = await cartService.addProductToCart(cid, pid, quantity ||1); // Llama al servicio para agregar el producto al carrito
    
    res.send({status: "success", result}); // Retorna el resultado de la adición
}

// Elimina un producto del carrito
export const deleteProductFromCart = async (req, res) => {
    const {cid, pid} = req.params; // Extrae el ID del carrito y del producto de los parámetros de la solicitud
    let result = await cartService.deleteProductFromCart(cid, pid); // Llama al servicio para eliminar el producto del carrito
    res.send({status: "success", result}); // Retorna el resultado de la eliminación
}


