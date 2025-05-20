import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 8081,
    URL_MONGO: process.env.MONGO_URL || 'mongodb+srv://admin:admin@cluster0.su6usvk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
}