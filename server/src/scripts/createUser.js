import mongoose from 'mongoose';
import config from '../config/config.js';
import userModel from '../dao/models/user.model.js';

const createUser = async () => {
    try {
        await mongoose.connect(config.URL_MONGO);
        console.log('Connected to MongoDB');

        const newUser = {
            name: 'Test User',
            email: 'test@example.com',
            role: 'USER'
        };

        const existingUser = await userModel.findOne({ email: newUser.email });

        if (!existingUser) {
            await userModel.create(newUser);
            console.log('Test user created successfully');
        } else {
            console.log('Test user already exists');
        }

        mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error creating test user:', error);
    }
};

createUser();