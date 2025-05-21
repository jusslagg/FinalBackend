import mongoose from "mongoose";



const productCollection = "products";
const productSchema = new mongoose.Schema({
    cod : {type: Number, required: true},
    nombre : {type: String, required: true},
    precio : {type: Number, required: true},
    stock : {
        type: Number,
        min: 0,
        required: true
    },
    categoria : {type: String, required: true},
})


const ProductModel = mongoose.model(productCollection, productSchema);


export default ProductModel;