import cartDTO from "../dao/dto/cart.dto.js";
import cartDao from "../dao/cart.dao.js";
import CartDTO from "../dao/dto/cart.dto.js";

export default class cartRepository {

    constructor() { 
        this.dao = new cartDao();
    }

    createCart = async (cart) => {
        const newCart = await this.dao.createCart();
        return new CartDTO(newCart);
    }

    getCartById = async (id) => {
        const cart = await this.dao.getCartById(id);
        return new CartDTO(cart);
    }

    deleteCart = async (id) => {
        return await this.dao.deleteCart(id);
    }

    addProductToCart    = async (cid, pid, quantity) => {
        return await this.dao.addProductToCart(cid, pid, quantity);
    }

    deleteProductFromCart = async (cid, pid) => {
        return await cartDao.deleteProductFromCart(cartId, productId);
    }

}