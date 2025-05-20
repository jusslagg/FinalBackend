import cartModel from "../dao/models/cart.model.js";
import ProductModel from "./models/product.model.js";



export default class Cart{

    getCartById=async (id) =>{
        try{
            return await cartModel.findById(id).populate("products.product")
        }
        catch(error){
            console.log(error);
            return null
        }
    }

    createCart=async (cart) =>{
        try {
            let newCart = await cartModel.create({ products: [] });
            return newCart;
        } catch (error) {
            console.log(error);
            return null
        }
    }

    deleteCart=async (id) =>{
        try {
            let cartDeleted = await cartModel.deleteOne({_id: id});
            return cartDeleted
        } catch (error) {
            console.log(error);
            return null
        }
    }  

        addProductToCart = async (cartId, productId, quantity = 1) => {
            try {
            const product = await ProductModel.findById(productId);
            if (!product) {
                throw new Error("Product not found");
            }
        
            if (product.stock < quantity || product.stock === 0) {
                throw new Error("Not enough stock");
            }
        
            const cart = await cartModel.findById(cartId);
            if (!cart) {
                return null;
            }
        
            if (!cart.products) {
                cart.products = [];
            }
        
            const productIndex = cart.products.findIndex(
                (p) => p.product.toString() === productId
            );
        
            if (productIndex !== -1) {
                cart.products[productIndex].quantity += quantity;
            } else {
                cart.products.push({ product: productId, quantity });
            }
        
            const updatedCart = await cart.save();
            return updatedCart;
            } catch (error) {
            console.log("❌ Error al agregar producto al carrito:", error.message);
            return null;
            }
        };

    deleteProductFromCart=async (cartId,productId) =>{
        try {
            const cartUpdated = await cartModel.updateOne(
                { _id: cartId },
                { $pull: { products: { product: productId } } }
            );         
            return cartUpdated
        } catch (error) {
            console.log(error);
            return null
        }
    }

}