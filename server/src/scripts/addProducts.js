import mongoose from 'mongoose';
import config from '../config/config.js';
import Product from '../dao/models/product.model.js';

const addProducts = async () => {
    try {
        await mongoose.connect(config.URL_MONGO);
        console.log('Connected to MongoDB');

        const products = [
            { title: 'The Last of Us Part II', description: 'A gripping action-adventure game.', price: 49.99, category: 'Video Games', stock: 100 },
            { title: 'Cyberpunk 2077', description: 'An open-world, action-adventure RPG set in Night City.', price: 39.99, category: 'Video Games', stock: 50 },
            { title: 'Red Dead Redemption 2', description: 'An epic tale of life in America\'s unforgiving heartland.', price: 59.99, category: 'Video Games', stock: 75 },
        ];

        await Product.insertMany(products);
        console.log('Products added successfully');

        mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error adding products:', error);
    }
};

addProducts();