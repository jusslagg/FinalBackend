import express from 'express';
import config from './config/config.js';
import UserRouter from './routes/user.router.js';
import OrderRouter from './routes/order.router.js';
import CartRouter from './routes/cart.router.js';
import ProductRouter from './routes/product.router.js';
import connectDB from './config/db.config.js'; 
import dictionaryRouter from './routes/dictionary.router.js';
import SessionRouter from './routes/sessions.router.js';


const app = express();

// server config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
const connection = connectDB(config.MONGO_URL);

// routers
app.use('/api/users', new UserRouter().getRouter());
app.use('/api/orders', new OrderRouter().getRouter());
app.use('/api/products', new ProductRouter().getRouter());
app.use('/api/carts', new CartRouter().getRouter());

app.use('/api/dictionary', dictionaryRouter);
app.use('/api/session', (new SessionRouter()).getRouter());



app.use(express.json());

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});

