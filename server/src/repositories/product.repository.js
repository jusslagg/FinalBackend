import ProductDTO from "../dao/dto/product.dto.js";
import ProductDao from "../dao/product.dao.js";

export default class ProductRepository {
    constructor() {
        this.dao = new ProductDao();
    }

    // Obtener todos los productos
    getProduct = async () => {
        try {
            const products = await this.dao.getProduct();
            return products;
        } catch (error) {
            console.log("Error al obtener productos:", error);
            return null;
        }
    };

    // Obtener un producto por ID
    getProductById = async (id) => {
        try {
            const product = await this.dao.getProductById(id);
            if (!product) {
                console.log("Producto no encontrado.");
                return null;
            }
            return new ProductDTO(product);
        } catch (error) {
            console.log("Error al obtener el producto por ID:", error);
            return null;
        }
    };

    // Crear un producto
    createProduct = async (product) => {
        try {
            const productToInsert = new ProductDTO(product);
            const createdProduct = await this.dao.createProduct(productToInsert);
            return new ProductDTO(createdProduct);
        } catch (error) {
            console.log("Error al crear producto:", error);
            return null;
        }
    };

    // Actualizar un producto
    updateProduct = async (id, product) => {
        try {
            const productToUpdate = new ProductDTO(product);
            const updatedProduct = await this.dao.updateProduct(id, productToUpdate);
            if (!updatedProduct) {
                console.log("Producto no encontrado para actualizar.");
                return null;
            }
            return new ProductDTO(updatedProduct);
        } catch (error) {
            console.log("Error al actualizar el producto:", error);
            return null;
        }
    };

    // Eliminar un producto
    deleteProduct = async (id) => {
        try {
            const deletedProduct = await this.dao.deleteProduct(id);
            if (!deletedProduct) {
                console.log("Producto no encontrado para eliminar.");
                return null;
            }
            return deletedProduct;
        } catch (error) {
            console.log("Error al eliminar el producto:", error);
            return null;
        }
    };
}
