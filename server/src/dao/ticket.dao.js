import ticketModel from './models/ticket.model.js';
import logger from '../config/logger.js'; // Usamos el logger

export default class Ticket {
    constructor() {
        console.log("Working tickets with Database persistence in MongoDB!");
    }

    // Obtener todos los tickets
    async getTickets() {
        try {
            // Devolvemos los tickets en formato 'lean' para obtener un objeto plano
            return await ticketModel.find().lean();
        } catch (error) {
            logger.error(`Error getting tickets: ${error.message}`);
            throw new Error(`Error getting tickets: ${error.message}`);
        }
    }

    // Obtener un ticket por su ID
    async getTicketById(id) {
        try {
            const ticket = await ticketModel.findById(id).lean();
            if (!ticket) {
                throw new Error("Ticket not found");
            }
            return ticket;
        } catch (error) {
            logger.error(`Error getting ticket by id ${id}: ${error.message}`);
            throw new Error(`Error getting ticket by id: ${error.message}`);
        }
    }

    // Crear un nuevo ticket
    async createTicket(ticket) {
        try {
            // Asumimos que 'ticket' es el objeto adecuado para crear un nuevo ticket
            return await ticketModel.create(ticket);
        } catch (error) {
            logger.error(`Error creating ticket: ${error.message}`);
            throw new Error(`Error creating ticket: ${error.message}`);
        }
    }
}
