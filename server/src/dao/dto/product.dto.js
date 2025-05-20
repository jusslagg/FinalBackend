export default class productDTO{
    constructor(product){
        this.nombre = product.nombre;
        this.precio = product.precio;
        this.stock = product.stock;
        this.categoria = product.categoria;
    }
}