import UserRepository from "../repositories/user.repository.js";

const userService = new UserRepository();

export const getUserById = async (req, res) => {
    try {
        const { uid } = req.params;
        const result = await userService.getUserById(uid);

        if (!result) {
            return res.status(404).send({ status: "error", message: "Usuario no encontrado" });
        }

        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        res.status(500).send({ status: "error", message: "Error interno al obtener usuario" });
    }
};

export const getUsers = async (req, res) => {
    try {
        const result = await userService.getUser();
        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).send({ status: "error", message: "Error interno al obtener usuarios" });
    }
};

export const saveUser = async (req, res) => {
    try {
        const user = req.body;

        if (!user.nombre || !user.email) {
            return res.status(400).send({ status: "error", message: "Faltan campos obligatorios (nombre, email)" });
        }

        const result = await userService.saveUser(user);
        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al guardar usuario:", error);
        res.status(500).send({ status: "error", message: "Error interno al guardar usuario" });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { uid } = req.params;
        const user = req.body;

        const existingUser = await userService.getUserById(uid);
        if (!existingUser) {
            return res.status(404).send({ status: "error", message: "Usuario no encontrado" });
        }

        const result = await userService.updateUser(uid, user);
        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        res.status(500).send({ status: "error", message: "Error interno al actualizar usuario" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { uid } = req.params;

        const existingUser = await userService.getUserById(uid);
        if (!existingUser) {
            return res.status(404).send({ status: "error", message: "Usuario no encontrado" });
        }

        const result = await userService.deleteUser(uid);
        res.send({ status: "success", result });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).send({ status: "error", message: "Error interno al eliminar usuario" });
    }
};
