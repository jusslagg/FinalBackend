import mongoose from 'mongoose';

const connectDB = async (url) => {
    try {
        // Nos conectamos a MongoDB sin opciones obsoletas
        const conn = await mongoose.connect(url);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error("Error conectando con MongoDB", error);
        process.exit(1); // Terminamos el proceso en caso de error
    }
}

export default connectDB;
