import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        default: () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    },
    purchase_datetime: {
        type: Date,
        default: () => new Date()
    },
    amount: {
        type: Number,
        required: true,
        min: 0 // Aseguramos que el monto no pueda ser negativo
    },
    purchaser: {
        type: String,
        required: true
    }
});

const ticketModel = mongoose.model('Ticket', ticketSchema);

export default ticketModel;
