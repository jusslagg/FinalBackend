import productModel from "./models/product.model.js";

export default class Product {

    getProduct = async () => {
        try {
            let allProduct = await productModel.find();
            return allProduct;
        } catch (error) {
            console.log("Error al obtener productos:", error);
            return null;
        }
    };

    getProductById = async (id) => {
        try {
            let product = await productModel.findOne({ _id: id });
            if (!product) {
                console.log("Producto no encontrado.");
                return null;
            }
            return product;
        } catch (error) {
            console.log("Error al obtener el producto por ID:", error);
            return null;
        }
    };

    createProduct = async (product) => {
        try {
            let productCreated = await productModel.create(product);
            return productCreated;
        } catch (error) {
            console.log("Error al crear el producto:", error);
            return null;
        }
    };

    updateProduct = async (id, product) => {
        try {
            let productUpdated = await productModel.findOneAndUpdate({ _id: id }, { $set: product }, { new: true });
            if (!productUpdated) {
                console.log("Producto no encontrado para actualizar.");
                return null;
            }
            return productUpdated;
        } catch (error) {
            console.log("Error al actualizar el producto:", error);
            return null;
        }
    };

    deleteProduct = async (id) => {
        try {
            let productDeleted = await productModel.findOneAndDelete({ _id: id });
            if (!productDeleted) {
                console.log("Producto no encontrado para eliminar.");
                return null;
            }
            return productDeleted;
        } catch (error) {
            console.log("Error al eliminar el producto:", error);
            return null;
        }
    };
}
