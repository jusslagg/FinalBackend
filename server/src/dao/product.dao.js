import productModel from "./models/product.model.js";

export default class Product{

    // Obtiene todos los productos
    getProduct = async () => {
        try{
            let allProduct = await productModel.find(); // Busca todos los productos en la base de datos
            return allProduct; // Retorna todos los productos
        }
        catch(error){
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }

    // Obtiene un producto por ID
    getProductById = async (id) => {
        try{
            let product = await productModel.findOne({_id: id}); // Busca un producto por ID en la base de datos
            return product; // Retorna el producto encontrado
        }
        catch(error){
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }

    // Crea un nuevo producto
    createProduct = async (product) => {
        try{
            let ProductCreated = await productModel.create(product); // Crea un nuevo producto en la base de datos


            return ProductCreated; // Retorna el producto creado
        }
        catch(error){
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }


    // Actualiza un producto
    updateProduct = async (id, product) => {
        try{
            let ProductUpdated = await productModel.updateOne({_id : id}, {$set: product}); // Actualiza un producto en la base de datos
            return ProductUpdated; // Retorna el producto actualizado
        }
        catch(error){
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }

    // Elimina un producto
    deleteProduct = async (id, product) => {
        try{
            let productdeleted = await productModel.deleteOne({_id : id}); // Elimina un producto de la base de datos
            return productdeleted; // Retorna el producto eliminado
        }
        catch(error){
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }
}