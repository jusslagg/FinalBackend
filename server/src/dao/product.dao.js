import productModel from "./models/product.model.js";

export default class Product{

    getProduct = async () => {
        try{
            let allProduct = await productModel.find();
            return allProduct;
        }
        catch(error){
            console.log(error);
            return null
        }
    }

    getProductById = async (id) => {
        try{
            let product = await productModel.findOne({_id: id});
            return product;
        }
        catch(error){
            console.log(error);
            return null
        }
    }

    createProduct = async (product) => {
        try{
            let ProductCreated = await productModel.create(product);


            return ProductCreated;
        }
        catch(error){
            console.log(error);
            return null
        }
    }


    updateProduct = async (id, product) => {
        try{
            let ProductUpdated = await productModel.updateOne({_id : id}, {$set: product});
            return ProductUpdated;
        }
        catch(error){
            console.log(error);
            return null
        }
    }

    deleteProduct = async (id, product) => {
        try{
            let productdeleted = await productModel.deleteOne({_id : id});
            return productdeleted;
        }
        catch(error){
            console.log(error);
            return null
        }
    }
}