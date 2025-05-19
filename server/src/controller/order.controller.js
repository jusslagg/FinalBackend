import OrderRepository from '../repositories/order.repository.js';
import UserRepository from '../repositories/user.repository.js';
import TicketRepository from '../repositories/ticket.repository.js';
import { generateUniqueCode } from '../utils.js';
import logger from '../config/logger.js';

const orderService = new OrderRepository();
const userService = new UserRepository();
const ticketService = new TicketRepository();

export const getOrders = async (req, res) => {
    let result = await orderService.getOrders();
    res.send({status: "success", result});
    logger.info('Get orders');
}

export const getOrderById = async (req, res) => {
    const { oid } = req.params;
    let order = await orderService.getOrderById(oid);
    res.send({status: "success", result: order});
    logger.info(`Get order by id: ${req.params.oid}`);
}

export const resolveOrder = async (req, res) => {
    const resolve = req.query.resolve;
    let order = await orderService.getOrderById(req.params.oid);
    if (!order) return res.status(404).send({status:"error", error:"Order not found"});
    order.status = resolve;
    let result = await orderService.resolveOrder(order._id, order);
    res.send({status: "success", result});
    logger.info(`Order resolved: ${req.params.oid} - Status: ${resolve}`);
}

export const purchaseCart = async (req, res) => {
    const { cid } = req.params;
    try {
        const cart = await orderService.getOrderById(cid);
        if (!cart) {
            return res.status(404).send({ status: "error", message: "Cart not found" });
        }

        let processedItems = [];
        let remainingItems = [];
        let amount = 0;

        // Simulate stock validation and process items
        for (const item of cart.items) {
            // Assume a function validateStock(item) exists that returns true if there is enough stock
            const hasStock = true; // Replace with actual stock validation
            if (hasStock) {
                processedItems.push(item);
                amount += item.price; // Assuming each item has a price property
            } else {
                remainingItems.push(item);
            }
        }

        if (processedItems.length === 0) {
            return res.status(400).send({ status: "error", message: "No items could be processed due to insufficient stock" });
        }

        const ticketData = {
            code: generateUniqueCode(),
            amount: amount,
            purchaser: req.user.email
        };

        const ticket = await ticketService.createTicket(ticketData);

        // Update cart with remaining items
        cart.items = remainingItems;
        cart.totalPrice = remainingItems.reduce((sum, item) => sum + item.price, 0); //Recalculate total price
        await orderService.resolveOrder(cid, cart);

        res.send({ status: "success", message: "Purchase completed", ticket: ticket, processedItems: processedItems, remainingItems: remainingItems });
    } catch (error) {
        logger.error(`Error purchasing cart: ${error.message}`);
        res.status(500).send({ status: "error", message: "Error purchasing cart" });
    }
}