import Router from './js/router.js';
import {getCartById, createCart, deleteCart, addProductToCart, deleteProductFromCart} from '../controller/cart.controller.js';


export default class cartRouter extends Router {
    init(){

        this.get('/:cid',["PUBLIC"], getCartById);

        this.post('/',["ADMIN"], createCart);
        
        this.delete('/:cid',["PUBLIC"], deleteCart);
        
        this.post('/:cid/product/:pid',["PUBLIC"], addProductToCart);
        
        this.delete('/:cid/product/:pid',["PUBLIC"], deleteProductFromCart);

    }   
}
