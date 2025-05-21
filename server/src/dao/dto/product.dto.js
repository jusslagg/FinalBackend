// DTO para el producto
export default class productDTO{
    constructor(product){
        // Mapea los datos del producto al DTO
        this.nombre = product.nombre; // Nombre del producto
        this.precio = product.precio; // Precio del producto
        this.stock = product.stock; // Stock del producto
        this.categoria = product.categoria; // Categoría del producto
    }
}