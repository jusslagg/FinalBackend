import UserRepository from "../repositories/user.repository.js";

const userService = new UserRepository();

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const result = await userService.getUsers(); // nombre correcto del método
    res.send({ status: "success", result });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).send({ status: "error", message: "Error interno al obtener usuarios" });
  }
};

// Obtener un usuario por ID
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

// Crear usuario
export const saveUser = async (req, res) => {
  try {
    const user = req.body;

    if (!user.first_name || !user.last_name || !user.email || !user.password) {
      return res.status(400).send({
        status: "error",
        message: "Faltan campos obligatorios (first_name, last_name, email, password)"
      });
    }

    const result = await userService.saveUser(user);
    res.status(201).send({ status: "success", result });
  } catch (error) {
    console.error("Error al guardar usuario:", error);
    res.status(500).send({ status: "error", message: "Error interno al guardar usuario" });
  }
};

// Actualizar usuario
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

// Eliminar usuario
export const deleteUser = async (req, res) => {
  try {
    const { uid } = req.params;

    const existingUser = await userService.getUserById(uid);
    if (!existingUser) {
      return res.status(404).send({ status: "error", message: "Usuario no encontrado" });
    }

    const result = await userService.deleteUser(uid);
    res.send({ status: "success", message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).send({ status: "error", message: "Error interno al eliminar usuario" });
  }
};
