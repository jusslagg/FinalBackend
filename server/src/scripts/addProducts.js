import mongoose from 'mongoose'; // Importa la librería mongoose
import config from '../config/config.js'; // Importa la configuración de la aplicación
import Product from '../dao/models/product.model.js'; // Importa el modelo de productos

// Función para agregar productos a la base de datos
const addProducts = async () => {
    try {
        await mongoose.connect(config.URL_MONGO); // Conecta a la base de datos MongoDB
        console.log('Connected to MongoDB'); // Imprime un mensaje en la consola

        const products = [ // Array de productos a agregar
            { title: 'The Last of Us Part II', description: 'A gripping action-adventure game.', price: 49.99, category: 'Video Games', stock: 100 }, // Producto 1
            { title: 'Cyberpunk 2077', description: 'An open-world, action-adventure RPG set in Night City.', price: 39.99, category: 'Video Games', stock: 50 }, // Producto 2
            { title: 'Red Dead Redemption 2', description: 'An epic tale of life in America\'s unforgiving heartland.', price: 59.99, category: 'Video Games', stock: 75 }, // Producto 3
        ];

        await Product.insertMany(products); // Inserta los productos en la base de datos
        console.log('Products added successfully'); // Imprime un mensaje en la consola

        mongoose.disconnect(); // Desconecta de la base de datos MongoDB
        console.log('Disconnected from MongoDB'); // Imprime un mensaje en la consola
    } catch (error) {
        console.error('Error adding products:', error); // Imprime un mensaje de error en la consola
    }
};

addProducts(); // Llama a la función para agregar productos