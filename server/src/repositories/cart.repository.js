import cartDTO from "../dao/dto/cart.dto.js"; // Importa el DTO de carritos
import cartDao from "../dao/cart.dao.js"; // Importa el DAO de carritos
import CartDTO from "../dao/dto/cart.dto.js"; // Importa el DTO de carritos

// Clase para el repositorio de carritos
export default class cartRepository {

    constructor() {
        this.dao = new cartDao(); // Crea una instancia del DAO de carritos
    }

    // Crea un nuevo carrito
    createCart = async (cart) => {
        const newCart = await this.dao.createCart(); // Crea un nuevo carrito usando el DAO
        return new CartDTO(newCart); // Retorna el nuevo carrito como un DTO
    }

    // Obtiene un carrito por ID
    getCartById = async (id) => {
        const cart = await this.dao.getCartById(id); // Obtiene un carrito por ID usando el DAO
        return new CartDTO(cart); // Retorna el carrito como un DTO
    }

    // Elimina un carrito
    deleteCart = async (id) => {
        return await this.dao.deleteCart(id); // Elimina un carrito usando el DAO
    }

    // Agrega un producto al carrito
    addProductToCart    = async (cid, pid, quantity) => {
        return await this.dao.addProductToCart(cid, pid, quantity); // Agrega un producto al carrito usando el DAO
    }

    // Elimina un producto del carrito
    deleteProductFromCart = async (cid, pid) => {
        return await cartDao.deleteProductFromCart(cartId, productId); // Elimina un producto del carrito usando el DAO
    }

}