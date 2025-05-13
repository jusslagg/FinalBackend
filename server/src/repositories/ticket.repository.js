import TicketDao from "../dao/ticket.dao.js";

export default class TicketRepository {
    constructor() {
        this.dao = new TicketDao();
    }

    async getTickets() {
        try {
            return await this.dao.getTickets();
        } catch (error) {
            throw new Error(`Error getting tickets: ${error.message}`);
        }
    }

    async getTicketById(id) {
        try {
            return await this.dao.getTicketById(id);
        } catch (error) {
            throw new Error(`Error getting ticket by id: ${error.message}`);
        }
    }

    async createTicket(ticket) {
        try {
            return await this.dao.createTicket(ticket);
        } catch (error) {
            throw new Error(`Error creating ticket: ${error.message}`);
        }
    }
}