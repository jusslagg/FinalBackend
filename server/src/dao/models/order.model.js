import mongoose from 'mongoose';

// Definimos el esquema para los productos en la orden
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 }, // La cantidad debe ser al menos 1
  price: { type: Number, required: true, min: 0 } // El precio debe ser un número positivo
});

const collection = 'order';
const schema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true }, // Número único de la orden
  business: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'business',
    required: true
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
    required: true
  },
  products: {
    type: [productSchema],
    required: true // Los productos son obligatorios en una orden
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0 // El precio total no puede ser negativo
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending' // Estado por defecto
  }
});

// Creamos el modelo de Mongoose a partir del esquema
const orderModel = mongoose.model(collection, schema);
export default orderModel;
