import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'products',
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
          min: 1,
        },
      },
    ],
  },
  {
    timestamps: true, // Agrega createdAt y updatedAt
  }
);

const Cart = mongoose.model('Cart', cartSchema); // Singular y capitalizado

export default Cart;
