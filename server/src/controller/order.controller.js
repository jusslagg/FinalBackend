import OrderRepository from '../repositories/order.repository.js';
import UserRepository from '../repositories/user.repository.js';
import TicketRepository from '../repositories/ticket.repository.js';
import { generateUniqueCode } from '../utils.js';
import logger from '../config/logger.js';
import OrderDTO from '../dao/dto/order.dto.js'; // Importamos el DTO

const orderService = new OrderRepository();
const userService = new UserRepository();
const ticketService = new TicketRepository();

// Obtener todas las órdenes
export const getOrders = async (req, res) => {
  try {
    const result = await orderService.getOrders();
    
    // Usamos el DTO para transformar las órdenes antes de enviarlas
    const transformedOrders = result.map(order => new OrderDTO(order));

    res.send({ status: "success", result: transformedOrders });
    logger.info('Get orders');
  } catch (error) {
    logger.error(`Error getting orders: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error retrieving orders" });
  }
};

// Obtener una orden por su ID
export const getOrderById = async (req, res) => {
  try {
    const { oid } = req.params;
    const order = await orderService.getOrderById(oid);

    if (!order) {
      logger.warn(`Order not found: ${oid}`);
      return res.status(404).send({ status: "error", message: "Order not found" });
    }

    // Usamos el DTO para transformar la orden
    const result = new OrderDTO(order);
    res.send({ status: "success", result });
    logger.info(`Get order by id: ${oid}`);
  } catch (error) {
    logger.error(`Error getting order by ID: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error retrieving order" });
  }
};

// Resolver una orden (completar o cancelar)
export const resolveOrder = async (req, res) => {
  try {
    const resolve = req.query.resolve;
    const order = await orderService.getOrderById(req.params.oid);

    if (!order) {
      logger.warn(`Order not found: ${req.params.oid}`);
      return res.status(404).send({ status: "error", message: "Order not found" });
    }

    // Actualizamos el estado de la orden
    order.status = resolve;
    const result = await orderService.resolveOrder(order._id, order);

    // Usamos el DTO para transformar la respuesta
    const transformedResult = new OrderDTO(result);
    res.send({ status: "success", result: transformedResult });
    logger.info(`Order resolved: ${req.params.oid} - Status: ${resolve}`);
  } catch (error) {
    logger.error(`Error resolving order: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error resolving order" });
  }
};

// Procesar la compra de un carrito
export const purchaseCart = async (req, res) => {
  try {
    const { cid } = req.params;
    const cart = await orderService.getOrderById(cid);

    if (!cart) {
      logger.warn(`Cart not found: ${cid}`);
      return res.status(404).send({ status: "error", message: "Cart not found" });
    }

    let processedItems = [];
    let remainingItems = [];
    let amount = 0;

    // Simulamos validación de stock
    for (const item of cart.items) {
      const hasStock = true; // TODO: Implementar validación de stock real

      if (hasStock) {
        processedItems.push(item);
        amount += item.price || 0;
      } else {
        remainingItems.push(item);
      }
    }

    if (processedItems.length === 0) {
      return res.status(400).send({ status: "error", message: "No items could be processed due to insufficient stock" });
    }

    // Crear ticket de compra
    const ticketData = {
      code: generateUniqueCode(),
      amount,
      purchaser: req.user?.email || "anonymous"
    };

    const ticket = await ticketService.createTicket(ticketData);

    // Actualizar el carrito con los elementos restantes
    cart.items = remainingItems;
    cart.totalPrice = remainingItems.reduce((sum, item) => sum + (item.price || 0), 0);
    await orderService.resolveOrder(cid, cart);

    // Usamos el DTO para transformar la respuesta del carrito
    const transformedCart = new OrderDTO(cart);

    res.send({
      status: "success",
      message: "Purchase completed",
      ticket,
      processedItems,
      remainingItems,
      cart: transformedCart // Devolvemos el carrito transformado
    });

    logger.info(`Purchase completed for cart: ${cid}`);
  } catch (error) {
    logger.error(`Error purchasing cart: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error purchasing cart" });
  }
};
