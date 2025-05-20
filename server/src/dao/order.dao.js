import orderModel from '../dao/models/order.model.js';

export default class Order{

    createOrder = async (order) => {
        try {
            let createdOrder = await orderModel.create(order);
            return createdOrder

        } catch (error) {
            console.log(error);
            return null
        }
    }

    getOrders  =async () => {
        try {
            return await orderModel.find().populate("user").populate("cart");
        } catch (error) {
            console.log(error);
            return null
        }
    }
}

