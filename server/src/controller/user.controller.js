import UserRepository from "../repositories/user.repository.js";

const userService = new UserRepository(); // Crea una instancia del repositorio de usuarios

// Obtiene un usuario por ID - Solo ADMIN
export const getUserById = async (req, res) => {
    const {uid} = req.params; // Extrae el ID del usuario de los parámetros de la solicitud
    let result = await userService.getUserById(uid); // Llama al servicio para obtener el usuario
    res.send({status: "success", result}); // Envía la respuesta con el usuario
}

// Obtiene todos los usuarios
export const getUsers = async (req, res) => {
    let result = await userService.getUser(); // Llama al servicio para obtener los usuarios
    res.send({status: "success", result}); // Envía la respuesta con los usuarios
}

// Guarda un nuevo usuario - Solo ADMIN
export const saveUser = async (req, res) => {
    const user = req.body; // Extrae el usuario del cuerpo de la solicitud
    let result = await userService.saveUser(user); // Llama al servicio para guardar el usuario
    res.send({status: "success", result}); // Envía la respuesta con el usuario guardado
}

// Actualiza un usuario - Solo ADMIN
export const updateUser = async (req, res) => {
    const {uid} = req.params; // Extrae el ID del usuario de los parámetros de la solicitud
    const user = req.body; // Extrae el usuario del cuerpo de la solicitud
    let result = await userService.updateUser(uid,user); // Llama al servicio para actualizar el usuario
    res.send({status: "success", result}); // Envía la respuesta con el usuario actualizado
}

// Elimina un usuario - Solo ADMIN
export const deleteUser = async (req, res) => {
    const {uid} = req.params; // Extrae el ID del usuario de los parámetros de la solicitud
    let result = await userService.deleteUser(uid); // Llama al servicio para eliminar el usuario
    res.send({status: "success", result}); // Envía la respuesta con el resultado de la eliminación
}

deleteUser.allowedRoles = ["ADMIN"];
getUserById.allowedRoles = ["ADMIN"];
saveUser.allowedRoles = ["ADMIN"];
updateUser.allowedRoles = ["ADMIN"];