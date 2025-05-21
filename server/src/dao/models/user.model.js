import mongoose from "mongoose"; // Importa mongoose

const collection = "user"; // Nombre de la colección

// Esquema del usuario
const userSchema = new mongoose.Schema ({
    name : String, // Nombre del usuario, es de tipo String
    email : String, // Email del usuario, es de tipo String
    role: { // Rol del usuario
        type : String, // Es de tipo String
        enum: ['USER', 'ADMIN'], // Los valores permitidos son 'USER' y 'ADMIN'
        default: 'USER' // El valor por defecto es 'USER'
    }

})

const userModel = mongoose.model(collection, userSchema); // Crea el modelo del usuario

export default userModel; // Exporta el modelo del usuario