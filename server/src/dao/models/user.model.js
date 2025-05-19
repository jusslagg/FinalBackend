import mongoose from 'mongoose';

const collection = 'user';

// Definir el esquema del usuario
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Aseguramos que el nombre es obligatorio
        trim: true, // Eliminamos espacios en blanco alrededor
        maxlength: 100 // Longitud máxima del nombre
    },
    email: {
        type: String,
        required: true, // Aseguramos que el email es obligatorio
        unique: true, // Aseguramos que el email sea único
        lowercase: true, // Convertimos a minúsculas
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'], // Validación de formato
        maxlength: 100 // Longitud máxima del email
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Definimos los roles posibles
        default: 'user' // El rol por defecto será 'user'
    },
    orders: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'order' // Referencia a los objetos en la colección 'order'
        }
    ]
});

// Crear el modelo a partir del esquema
const userModel = mongoose.model(collection, schema);

export default userModel;
