import Router from './js/router.js';
import {getOrderById, createOrder} from '../controller/order.controller.js';

export default class orderRouter extends Router {
    init(){

        //obtener ordenes
        this.get('/:oid',["ADMIN"], getOrderById);


        //crear orden
        this.post('/',["ADMIN"], createOrder);

    }   
}




