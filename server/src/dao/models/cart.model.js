import mongoose from 'mongoose'; // Importa mongoose

// Esquema del carrito
const cartSchema = new mongoose.Schema({
    products: [{ // Array de productos en el carrito
        product: { // Objeto que contiene la información del producto
            type: mongoose.Schema.Types.ObjectId, // Tipo ObjectId para referenciar a la colección de productos
            ref: 'products' // Referencia a la colección de productos
        },
        quantity: { // Cantidad del producto en el carrito
            type: Number, // Tipo Number
            default: 1 // Valor por defecto es 1
        }
    }], default: [] // Valor por defecto es un array vacío
});

const Cart = mongoose.model('Carts', cartSchema); // Crea el modelo Cart

export default Cart; // Exporta el modelo Cart