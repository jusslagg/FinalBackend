import mongoose from "mongoose";

const productCollection = "products";

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { 
    type: Number, 
    required: true, 
    min: 0, // Precio mínimo 0
  },
  stock: { 
    type: Number, 
    required: true, 
    min: 0, // Asegura que el stock no sea negativo
  },
  categoria: { type: String, required: true },
}, { timestamps: true }); // Crea los campos createdAt y updatedAt automáticamente

const ProductModel = mongoose.model(productCollection, productSchema);

export default ProductModel;
