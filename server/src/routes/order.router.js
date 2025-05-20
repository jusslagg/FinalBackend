import { Router } from 'express';
import { getOrders, createOrder } from '../controller/order.controller.js';

const router = Router();

// Obtener todas las órdenes (con paginación y filtros)
router.get('/', async (req, res) => {
    const { page = 1, limit = 10, status = '' } = req.query;

    try {
        const filters = status ? { status } : {};
        const orders = await getOrders(page, limit, filters);

        res.status(200).send({ status: "success", result: orders });
    } catch (error) {
        console.error("Error al obtener las órdenes:", error);
        res.status(500).send({ status: "error", message: "Error interno al obtener órdenes" });
    }
});

// Crear una nueva orden
router.post('/', async (req, res) => {
    const { userId, cartId, total } = req.body;

    // Validación de los parámetros
    if (!userId || !cartId || !total) {
        return res.status(400).send({ status: "error", message: "Faltan datos obligatorios (userId, cartId, total)" });
    }

    try {
        const newOrder = await createOrder(userId, cartId, total);
        res.status(201).send({ status: "success", message: "Orden creada correctamente", result: newOrder });
    } catch (error) {
        console.error("Error al crear la orden:", error);
        res.status(500).send({ status: "error", message: "Error interno al crear la orden" });
    }
});

export default router;
