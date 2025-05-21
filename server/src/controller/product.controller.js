import ProductRepository from "../repositories/product.repository.js";


const productService = new ProductRepository();


// Obtiene un producto por ID
export const getProductById =  async(req, res) => {
    const {pid} = req.params; // Extrae el ID del producto de los parámetros de la solicitud
    let result =  await productService.getProductById(pid); // Llama al servicio para obtener el producto
    res.send({status: "success", result}); // Envía la respuesta con el producto
}

// Obtiene todos los productos
export const getProduct = async(req, res) => {
    let result = await productService.getProduct(); // Llama al servicio para obtener los productos
    res.send({status: "success", result}); // Envía la respuesta con los productos
}

// Crea un nuevo producto
export const createProduct = async(req, res) => {
    const product = req.body; // Extrae el producto del cuerpo de la solicitud

    if (product.stock < 0) { // Si el stock es negativo
        return res.status(400).send({ error: "El stock no puede ser negativo" }); // Envía un error
    }
    
    let result = await productService.createProduct(product); // Llama al servicio para crear el producto
    res.send({status: "success", result}); // Envía la respuesta con el producto creado
}

// Actualiza un producto
export const updateProduct = async(req, res) => {
    const {pid} = req.params; // Extrae el ID del producto de los parámetros de la solicitud
    const product = req.body; // Extrae el producto del cuerpo de la solicitud

    if (product.stock < 0) { // Si el stock es negativo
        return res.status(400).send({ error: "El stock no puede ser negativo" }); // Envía un error
    }

    let result = await productService.updateProduct(pid, product); // Llama al servicio para actualizar el producto
    res.send({status: "success", result}); // Envía la respuesta con el producto actualizado
}

// Elimina un producto
export const deleteProduct = async(req, res) => {
    const {pid} = req.params; // Extrae el ID del producto de los parámetros de la solicitud
    let result = await productService.deleteProduct(pid); // Llama al servicio para eliminar el producto
    res.send({status: "success", result}); // Envía la respuesta con el resultado de la eliminación
}

deleteProduct.allowedRoles = ["ADMIN"];