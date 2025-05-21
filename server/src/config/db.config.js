import mongoose from "mongoose"; // Importa mongoose

// Función para conectar a la base de datos MongoDB
const connectDB = async (url) => {
    try{
        // Intentar conectar a la base de datos usando la URL proporcionada
        const conn = await mongoose.connect(url)
        console.log(`database connected`); // Imprimir un mensaje en la consola si la conexión es exitosa
        return conn; // Retornar la conexión
    } catch(error){
        // Si hay un error, imprimir el error en la consola y salir del proceso
        console.log(error); // Imprime el error en la consola
        process.exit(); // Sale del proceso
    }
}

export default connectDB; // Exporta la función connectDB