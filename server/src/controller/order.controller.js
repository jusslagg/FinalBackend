import OrderRepository from '../repositories/order.repository.js';
import UserRepository from '../repositories/user.repository.js';
import TicketRepository from '../repositories/ticket.repository.js';
// import CartService from '../cart.service.js';
import { generateUniqueCode } from '../utils.js';
import logger from '../config/logger.js';
import OrderDTO from '../dao/dto/order.dto.js';
// import productService from '../product.service.js';

const orderService = new OrderRepository();
const userService = new UserRepository();
const ticketService = new TicketRepository();
// const cartService = new CartService();

// ✅ Crear una nueva orden
export const createOrder = async (req, res) => {
  try {
    const { user, items } = req.body;

    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const newOrder = {
      user,
      items,
      totalPrice,
      status: "pending"
    };

    const result = await orderService.createOrder(newOrder);
    const transformed = new OrderDTO(result);

    res.status(201).send({ status: "success", result: transformed });
    logger.info('Order created successfully');
  } catch (error) {
    logger.error(`Error creating order: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error creating order" });
  }
};

// ✅ Obtener todas las órdenes
export const getOrders = async (req, res) => {
  try {
    const result = await orderService.getOrders();
    const transformedOrders = result.map(order => new OrderDTO(order));
    res.send({ status: "success", result: transformedOrders });
    logger.info('Get orders');
  } catch (error) {
    logger.error(`Error getting orders: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error retrieving orders" });
  }
};

// ✅ Obtener una orden por su ID
export const getOrderById = async (req, res) => {
  try {
    const { oid } = req.params;
    const order = await orderService.getOrderById(oid);

    if (!order) {
      logger.warn(`Order not found: ${oid}`);
      return res.status(404).send({ status: "error", message: "Order not found" });
    }

    const result = new OrderDTO(order);
    res.send({ status: "success", result });
    logger.info(`Get order by id: ${oid}`);
  } catch (error) {
    logger.error(`Error getting order by ID: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error retrieving order" });
  }
};

// ✅ Actualizar estado de la orden
export const resolveOrder = async (req, res) => {
  try {
    const resolve = req.query.resolve;
    const order = await orderService.getOrderById(req.params.oid);

    if (!order) {
      logger.warn(`Order not found: ${req.params.oid}`);
      return res.status(404).send({ status: "error", message: "Order not found" });
    }

    order.status = resolve;
    const result = await orderService.resolveOrder(order._id, order);
    const transformedResult = new OrderDTO(result);

    res.send({ status: "success", result: transformedResult });
    logger.info(`Order resolved: ${req.params.oid} - Status: ${resolve}`);
  } catch (error) {
    logger.error(`Error resolving order: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error resolving order" });
  }
};

// ✅ Eliminar una orden
export const deleteOrder = async (req, res) => {
  try {
    const { oid } = req.params;
    const result = await orderService.deleteOrder(oid);

    if (!result) {
      logger.warn(`Order not found: ${oid}`);
      return res.status(404).send({ status: "error", message: "Order not found" });
    }

    res.send({ status: "success", message: "Order deleted" });
    logger.info(`Order deleted: ${oid}`);
  } catch (error) {
    logger.error(`Error deleting order: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error deleting order" });
  }
};

// // ✅ Procesar compra de carrito
// export const purchaseCart = async (req, res) => {
//   try {
//     const { cid } = req.params;
//     // const cart = await cartService.getCartById(cid);

//     // if (!cart) {
//     //   logger.warn(`Cart not found: ${cid}`);
//     //   return res.status(404).send({ status: "error", message: "Cart not found" });
//     // }

//     // let processedItems = [];
//     // let remainingItems = [];
//     // let amount = 0;

//     // for (const item of cart.items) {
//     //   // const product = await productService.getProductById(item.product);
//     //   // const hasStock = product && product.stock >= item.quantity;

//     //   // if (hasStock) {
//     //   //   processedItems.push(item);
//     //   //   amount += item.price || 0;
//     //   //   product.stock -= item.quantity;
//     //   //   await productService.updateProduct(item.product, { stock: product.stock });
//     //   // } else {
//     //   //   remainingItems.push(item);
//     //   // }
//     // }

//     // if (processedItems.length === 0) {
//     //   return res.status(400).send({ status: "error", message: "No items could be processed due to insufficient stock" });
//     // }

//     // const ticketData = {
//     //   code: generateUniqueCode(),
//     //   amount,
//     //   purchaser: req.user?.email || "anonymous"
//     // };

//     // const ticket = await ticketService.createTicket(ticketData);

//     // cart.items = remainingItems;
//     // cart.totalPrice = remainingItems.reduce((sum, item) => sum + (item.price || 0), 0);
//     // await cartService.updateCart(cid, cart);

//     // const transformedCart = new OrderDTO(cart);

//     // res.send({
//     //   status: "success",
//     //   message: "Purchase completed",
//     //   ticket,
//     //   processedItems,
//     //   remainingItems,
//     //   cart: transformedCart
//     // });

//     // logger.info(`Purchase completed for cart: ${cid}`);
//   } catch (error) {
//     logger.error(`Error purchasing cart: ${error.message}`);
//     res.status(500).send({ status: "error", message: "Error purchasing cart" });
//   }
// };
