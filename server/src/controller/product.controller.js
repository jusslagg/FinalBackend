import ProductRepository from "../repositories/product.repository.js";


const productService = new ProductRepository();


export const getProductById =  async(req, res) => {
    const {pid} = req.params;
    let result =  await productService.getProductById(pid);
    res.send({status: "success", result});
}

export const getProduct = async(req, res) => {
    let result = await productService.getProduct();
    res.send({status: "success", result});
}

export const createProduct = async(req, res) => {
    const product = req.body;

    if (product.stock < 0) {
        return res.status(400).send({ error: "El stock no puede ser negativo" });
    }
    
    let result = await productService.createProduct(product);
    res.send({status: "success", result});
}

export const updateProduct = async(req, res) => {
    const {pid} = req.params;
    const product = req.body;

    if (product.stock < 0) {
        return res.status(400).send({ error: "El stock no puede ser negativo" });
    }

    let result = await productService.updateProduct(pid, product);
    res.send({status: "success", result});
}

export const deleteProduct = async(req, res) => {
    const {pid} = req.params;
    let result = await productService.deleteProduct(pid);
    res.send({status: "success", result});
}