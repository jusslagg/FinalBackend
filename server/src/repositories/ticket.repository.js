import TicketDao from "../dao/ticket.dao.js";
import logger from "../config/logger.js"; // Usamos logger para registrar errores

export default class TicketRepository {
    constructor() {
        this.dao = new TicketDao();
    }

    // Método para obtener todos los tickets
    async getTickets() {
        try {
            return await this.dao.getTickets();
        } catch (error) {
            logger.error(`Error getting tickets: ${error.message}`);
            throw new Error(`Error fetching tickets: ${error.message}`);
        }
    }

    // Método para obtener un ticket por ID
    async getTicketById(id) {
        try {
            const ticket = await this.dao.getTicketById(id);
            if (!ticket) {
                throw new Error(`Ticket with ID ${id} not found`);
            }
            return ticket;
        } catch (error) {
            logger.error(`Error getting ticket by ID ${id}: ${error.message}`);
            throw new Error(`Error fetching ticket by ID ${id}: ${error.message}`);
        }
    }

    // Método para crear un ticket
    async createTicket(ticket) {
        try {
            // Validamos que el ticket tenga los campos necesarios
            if (!ticket.code || !ticket.amount || !ticket.purchaser) {
                throw new Error("Missing required fields: code, amount, or purchaser");
            }

            // Si los campos son válidos, se crea el ticket
            const createdTicket = await this.dao.createTicket(ticket);
            return createdTicket;
        } catch (error) {
            logger.error(`Error creating ticket: ${error.message}`);
            throw new Error(`Error creating ticket: ${error.message}`);
        }
    }
}
