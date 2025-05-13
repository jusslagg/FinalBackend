import OrderRepository from '../repositories/order.repository.js';
import UserRepository from '../repositories/user.repository.js';
import TicketRepository from '../repositories/ticket.repository.js';
import { generateUniqueCode } from '../utils.js';

const orderService = new OrderRepository();
const userService = new UserRepository();
const ticketService = new TicketRepository();

export const getOrders = async (req, res) => {
    let result = await orderService.getOrders();
    res.send({status: "success", result})
}

export const getOrderById = async (req, res) => {
    const { oid } = req.params;
    let order = await orderService.getOrderById(oid);
    res.send({status: "success", result: order})
}

export const resolveOrder = async (req, res) => {
    const resolve = req.query.resolve;
    let order = await orderService.getOrderById(req.params.oid);
    if (!order) return res.status(404).send({status:"error", error:"Order not found"});
    order.status = resolve;
    let result = await orderService.resolveOrder(order._id, order);
    res.send({status: "success", result})
}

export const purchaseCart = async (req, res) => {
    const { cid } = req.params;
    try {
        const order = await orderService.getOrderById(cid);
        if (!order) {
            return res.status(404).send({ status: "error", message: "Cart not found" });
        }

        // Check stock for each product in the order
        let amount = order.totalPrice;

        const ticketData = {
            code: generateUniqueCode(),
            amount: amount,
            purchaser: req.user.email
        };
        
        const ticket = await ticketService.createTicket(ticketData);

        order.status = 'completed';
        await orderService.resolveOrder(cid, order);

        res.send({ status: "success", message: "Purchase completed", ticket: ticket });
    } catch (error) {
        console.error("Error purchasing cart:", error);
        res.status(500).send({ status: "error", message: "Error purchasing cart" });
    }
}