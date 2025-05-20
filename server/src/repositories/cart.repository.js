import CartDTO from "../dao/dto/cart.dto.js";
import cartDao from "../dao/cart.dao.js";

export default class CartRepository {
    constructor() {
        this.dao = new cartDao();
    }

    createCart = async () => {
        const newCart = await this.dao.createCart();
        return new CartDTO(newCart);
    };

    getCartById = async (id) => {
        const cart = await this.dao.getCartById(id);
        if (!cart) return null;
        return new CartDTO(cart);
    };

    deleteCart = async (id) => {
        return await this.dao.deleteCart(id);
    };

    addProductToCart = async (cid, pid, quantity) => {
        return await this.dao.addProductToCart(cid, pid, quantity);
    };

    deleteProductFromCart = async (cid, pid) => {
        return await this.dao.deleteProductFromCart(cid, pid); // ✅ corregido
    };
}
