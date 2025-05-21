import cartModel from "../dao/models/cart.model.js";
import ProductModel from "./models/product.model.js";



export default class Cart{

    // Obtiene un carrito por ID
    getCartById=async (id) =>{
        try{
            return await cartModel.findById(id).populate("products.product") // Busca el carrito por ID y popula los productos
        }
        catch(error){
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }

    // Crea un nuevo carrito
    createCart=async (cart) =>{
        try {
            let newCart = await cartModel.create({ products: [] }); // Crea un nuevo carrito con un array de productos vacío
            return newCart; // Retorna el nuevo carrito
        } catch (error) {
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }

    // Elimina un carrito por ID
    deleteCart=async (id) =>{
        try {
            let cartDeleted = await cartModel.deleteOne({_id: id}); // Elimina un carrito por ID
            return cartDeleted // Retorna el carrito eliminado
        } catch (error) {
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }

    // Agrega un producto al carrito
    addProductToCart = async (cartId, productId, quantity = 1) => {
        try {
        const product = await ProductModel.findById(productId); // Busca el producto por ID
        if (!product) { // Si no se encuentra el producto
            throw new Error("Product not found"); // Lanza un error
        }
    
        if (product.stock < quantity || product.stock === 0) { // Si no hay suficiente stock
            throw new Error("Not enough stock"); // Lanza un error
        }
    
        const cart = await cartModel.findById(cartId); // Busca el carrito por ID
        if (!cart) { // Si no se encuentra el carrito
            return null; // Retorna null
        }
    
        if (!cart.products) { // Si el carrito no tiene productos
            cart.products = []; // Inicializa el array de productos
        }
    
        const productIndex = cart.products.findIndex( // Busca el índice del producto en el carrito
            (p) => p.product.toString() === productId // Compara el ID del producto en el carrito con el ID del producto
        );
    
        if (productIndex !== -1) { // Si el producto ya está en el carrito
            cart.products[productIndex].quantity += quantity; // Aumenta la cantidad
        } else { // Si el producto no está en el carrito
            cart.products.push({ product: productId, quantity }); // Agrega el producto al carrito
        }
    
        const updatedCart = await cart.save(); // Guarda el carrito actualizado
        return updatedCart; // Retorna el carrito actualizado
        } catch (error) {
        console.log("❌ Error al agregar producto al carrito:", error.message); // Imprime el error en la consola
        return null; // Retorna null si hay un error
        }
    };

    // Elimina un producto del carrito
    deleteProductFromCart=async (cartId,productId) =>{
        try {
            const cartUpdated = await cartModel.updateOne( // Actualiza el carrito
                { _id: cartId }, // Busca el carrito por ID
                { $pull: { products: { product: productId } } } // Elimina el producto del carrito
            );
            return cartUpdated // Retorna el carrito actualizado
        } catch (error) {
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }

}