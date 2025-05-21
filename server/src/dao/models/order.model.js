import mongoose from "mongoose"; // Importa mongoose

const collection = "orders"; // Nombre de la colección

// Esquema de la orden
const orderSchema = new mongoose.Schema ({

    user: { // Usuario que realiza la orden
        type: mongoose.Schema.Types.ObjectId, // Tipo ObjectId para referenciar a la colección de usuarios
        ref: 'users', // Referencia a la colección de usuarios
        required: true // Es requerido
    },
    cart: { // Carrito asociado a la orden
        type: mongoose.Schema.Types.ObjectId, // Tipo ObjectId para referenciar a la colección de carritos
        ref: 'Carts', // Referencia a la colección de carritos
        required: true // Es requerido
    },
    total:{ // Total de la orden
        type: Number, // Tipo Number
        required: true // Es requerido
    },
    createdAt: { // Fecha de creación de la orden
        type: Date, // Tipo Date
        default: Date.now // Valor por defecto es la fecha actual
    }
})

const orderModel = mongoose.model(collection, orderSchema); // Crea el modelo de la orden

export default orderModel; // Exporta el modelo de la orden