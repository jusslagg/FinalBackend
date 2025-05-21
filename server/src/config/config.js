import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 8081,
    MONGO_URL: process.env.MONGO_URL,
    secret_JWT: process.env.JWT_PRIVATE_KEY
}