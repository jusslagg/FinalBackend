import ProductRepository from "../repositories/product.repository.js";

const productService = new ProductRepository();

export const getProductById = async (req, res) => {
    try {
        const { pid } = req.params;

        const result = await productService.getProductById(pid);
        if (!result) {
            return res.status(404).send({ status: "error", message: "Producto no encontrado" });
        }

        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al obtener producto:", error);
        res.status(500).send({ status: "error", message: "Error interno al obtener producto" });
    }
};

export const getProduct = async (req, res) => {
    try {
        const result = await productService.getProduct();
        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).send({ status: "error", message: "Error interno al obtener productos" });
    }
};

export const createProduct = async (req, res) => {
    try {
        const product = req.body;

        if (!product.nombre || product.precio == null || product.stock == null) {
            return res.status(400).send({ status: "error", message: "Faltan campos obligatorios" });
        }

        if (product.stock < 0 || product.precio < 0) {
            return res.status(400).send({ status: "error", message: "Precio o stock no pueden ser negativos" });
        }

        const result = await productService.createProduct(product);
        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al crear producto:", error);
        res.status(500).send({ status: "error", message: "Error interno al crear producto" });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { pid } = req.params;
        const product = req.body;

        if (product.stock != null && product.stock < 0) {
            return res.status(400).send({ status: "error", message: "El stock no puede ser negativo" });
        }

        if (product.precio != null && product.precio < 0) {
            return res.status(400).send({ status: "error", message: "El precio no puede ser negativo" });
        }

        const existingProduct = await productService.getProductById(pid);
        if (!existingProduct) {
            return res.status(404).send({ status: "error", message: "Producto no encontrado" });
        }

        const result = await productService.updateProduct(pid, product);
        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al actualizar producto:", error);
        res.status(500).send({ status: "error", message: "Error interno al actualizar producto" });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { pid } = req.params;

        const existingProduct = await productService.getProductById(pid);
        if (!existingProduct) {
            return res.status(404).send({ status: "error", message: "Producto no encontrado" });
        }

        const result = await productService.deleteProduct(pid);
        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        res.status(500).send({ status: "error", message: "Error interno al eliminar producto" });
    }
};
