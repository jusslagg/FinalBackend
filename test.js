import mongoose from 'mongoose'; // Importa mongoose

// Funcion para conectar a la base de datos MongoDB
const connectDB = async (url) => {
    try {
        // Intentamos conectar a MongoDB
        const conn = await mongoose.connect(url);
        console.log(`MongoDB Connected: ${conn.connection.host}`); // Imprimimos en consola si la conexion fue exitosa
        return conn; // Retornamos la conexion
    } catch (error) {
        console.error("Error conectando con MongoDB", error); // Imprimimos el error en consola
        process.exit(1); // Terminamos el proceso en caso de error
    }
}

export default connectDB; // Exportamos la funcion connectDB
