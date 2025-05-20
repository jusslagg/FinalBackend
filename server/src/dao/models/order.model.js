import mongoose from "mongoose";

const collection = "orders";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carts',
    required: true
  },
  total: {
    type: Number,
    required: true,
    min: [0, 'El total debe ser un número positivo'] // validación de total positivo
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'shipped', 'delivered', 'canceled'],
    default: 'pending' // estado predeterminado
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Índices para búsqueda eficiente
orderSchema.index({ user: 1 });
orderSchema.index({ createdAt: -1 });

const orderModel = mongoose.model(collection, orderSchema);

export default orderModel;
