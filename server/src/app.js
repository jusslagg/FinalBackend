import express from 'express';
import config from './config/config.js';
import userRouter from './routes/user.router.js';
import orderRouter from './routes/order.router.js';
import cartRouter from './routes/cart.router.js';
import ProductRouter from './routes/product.router.js';
import connectDB from './config/db.config.js'; 
import dictionaryRouter from './routes/dictionary.router.js';
import SessionRouter from './routes/sessions.router.js';


const app = express();

// server config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
const connection = connectDB(config.URL_MONGO);

// routers
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/products', new ProductRouter().getRouter());
app.use('/api/carts', cartRouter);

app.use('/api/dictionary', dictionaryRouter);
app.use('/api/session', (new SessionRouter()).getRouter());


app.use(express.json());

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});
