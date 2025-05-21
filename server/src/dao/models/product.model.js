import mongoose from "mongoose"; // Importa mongoose

const productCollection = "products"; // Nombre de la colección

// Esquema del producto
const productSchema = new mongoose.Schema({
    nombre : {type: String, required: true}, // Nombre del producto, es de tipo String y es requerido
    precio : {type: Number, required: true}, // Precio del producto, es de tipo Number y es requerido
    stock : {
        type: Number, // Stock del producto, es de tipo Number
        min: 0, // El valor mínimo es 0
        required: true // Es requerido
    },
    categoria : {type: String, required: true}, // Categoría del producto, es de tipo String y es requerido
})

const ProductModel = mongoose.model(productCollection, productSchema); // Crea el modelo del producto

export default ProductModel; // Exporta el modelo del producto