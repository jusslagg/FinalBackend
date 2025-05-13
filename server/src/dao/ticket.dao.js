import ticketModel from "./models/ticket.model.js";

export default class Ticket {
    constructor() {
        console.log("Working tickets with Database persistence in mongodb!");
    }

    async getTickets() {
        try {
            return await ticketModel.find().lean();
        } catch (error) {
            throw new Error(`Error getting tickets: ${error.message}`);
        }
    }

    async getTicketById(id) {
        try {
            return await ticketModel.findById(id).lean();
        } catch (error) {
            throw new Error(`Error getting ticket by id: ${error.message}`);
        }
    }

    async createTicket(ticket) {
        try {
            return await ticketModel.create(ticket);
        } catch (error) {
            throw new Error(`Error creating ticket: ${error.message}`);
        }
    }
}