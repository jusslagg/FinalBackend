import mongoose from 'mongoose';
import config from '../config/config.js';
import userModel from '../dao/models/user.model.js';

const createAdmin = async () => {
    try {
        await mongoose.connect(config.URL_MONGO);
        console.log('Connected to MongoDB');

        const adminUser = {
            name: 'Admin User',
            email: 'admin@example.com',
            role: 'ADMIN'
        };

        const existingAdmin = await userModel.findOne({ email: adminUser.email });

        if (!existingAdmin) {
            await userModel.create(adminUser);
            console.log('Admin user created successfully');
        } else {
            console.log('Admin user already exists');
        }

        mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error creating admin user:', error);
    }
};

createAdmin();