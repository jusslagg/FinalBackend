import ProductDTO from "../dao/dto/product.dto.js"; // Importa el DTO de productos
import ProductDao from "../dao/product.dao.js"; // Importa el DAO de productos

// Clase para el repositorio de productos
export default class ProductRepository {
    constructor() {
        this.dao = new ProductDao(); // Crea una instancia del DAO de productos
    }

    // Obtiene todos los productos
    getProduct = async () => {
        let result = await this.dao.getProduct(); // Obtiene todos los productos usando el DAO
        return result; // Retorna el resultado
    }

    // Obtiene un producto por ID
    getProductById = async (id) => {
        let result = await this.dao.getProductById(id); // Obtiene un producto por ID usando el DAO
        return result; // Retorna el resultado
    }


    // Crea un nuevo producto
    createProduct = async (product) => {
        let productToInsert = new ProductDTO(product); // Crea un DTO de producto
        let result = await this.dao.createProduct(productToInsert); // Crea un nuevo producto usando el DAO
        return result; // Retorna el resultado
    }


    // Actualiza un producto
    updateProduct = async (id,product) => {
        let productToUpdate = new ProductDTO(product); // Crea un DTO de producto
        let result = await this.dao.updateProduct(id, productToUpdate); // Actualiza un producto usando el DAO
        return result; // Retorna el resultado
    }

    // Elimina un producto
    deleteProduct = async (id) => {
        let result = await this.dao.deleteProduct(id); // Elimina un producto usando el DAO
        return result; // Retorna el resultado
    }
}