import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products'
        },
        quantity: {
            type: Number,
            default: 1
        }
    }], default: []
});

const Cart = mongoose.model('Carts', cartSchema);

export default Cart;