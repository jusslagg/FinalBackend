import cartModel from "../dao/models/cart.model.js";
import ProductModel from "./models/product.model.js";

export default class Cart {

    getCartById = async (id) => {
        try {
            const cart = await cartModel.findById(id).populate("products.product");
            if (!cart) {
                console.warn(`🛒 Carrito con ID ${id} no encontrado`);
                return null;
            }
            return cart;
        } catch (error) {
            console.error("❌ Error en getCartById:", error.message);
            return null;
        }
    };

    createCart = async () => {
        try {
            const newCart = await cartModel.create({ products: [] });
            return newCart;
        } catch (error) {
            console.error("❌ Error en createCart:", error.message);
            return null;
        }
    };

    deleteCart = async (id) => {
        try {
            const result = await cartModel.deleteOne({ _id: id });
            if (result.deletedCount === 0) {
                console.warn(`🛒 No se encontró carrito para eliminar con ID: ${id}`);
                return null;
            }
            return result;
        } catch (error) {
            console.error("❌ Error en deleteCart:", error.message);
            return null;
        }
    };

    addProductToCart = async (cartId, productId, quantity = 1) => {
        try {
            const product = await ProductModel.findById(productId);
            if (!product) {
                console.warn(`📦 Producto no encontrado con ID: ${productId}`);
                return null;
            }

            if (product.stock < quantity || product.stock === 0) {
                console.warn(`⚠️ Stock insuficiente para el producto: ${product.nombre}`);
                return null;
            }

            const cart = await cartModel.findById(cartId);
            if (!cart) {
                console.warn(`🛒 Carrito no encontrado con ID: ${cartId}`);
                return null;
            }

            if (!cart.products) cart.products = [];

            const index = cart.products.findIndex(p => p.product.toString() === productId);
            if (index !== -1) {
                cart.products[index].quantity += quantity;
            } else {
                cart.products.push({ product: productId, quantity });
            }

            const updatedCart = await cart.save();
            return updatedCart;
        } catch (error) {
            console.error("❌ Error en addProductToCart:", error.message);
            return null;
        }
    };

    deleteProductFromCart = async (cartId, productId) => {
        try {
            const result = await cartModel.updateOne(
                { _id: cartId },
                { $pull: { products: { product: productId } } }
            );

            if (result.modifiedCount === 0) {
                console.warn(`⚠️ No se encontró el producto ${productId} en el carrito ${cartId}`);
                return null;
            }

            return result;
        } catch (error) {
            console.error("❌ Error en deleteProductFromCart:", error.message);
            return null;
        }
    };
}
