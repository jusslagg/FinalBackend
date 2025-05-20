import mongoose from "mongoose";

const collection = "orders";

const orderSchema = new mongoose.Schema ({

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
    total:{
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const orderModel = mongoose.model(collection, orderSchema);

export default orderModel;