import UserDTO from "../dao/dto/user.dto.js"; // Importa el DTO de usuarios
import UserDao from "../dao/user.dao.js"; // Importa el DAO de usuarios

// Clase para el repositorio de usuarios
export default class UserRepository {
    constructor() {
        this.dao = new UserDao(); // Crea una instancia del DAO de usuarios
    }

    // Obtiene todos los usuarios
    getUser = async () => {
        let result = await this.dao.getUser(); // Obtiene todos los usuarios usando el DAO
        return result; // Retorna el resultado
    }

    // Obtiene un usuario por ID
    getUserById = async (id) => {
        let result = await this.dao.getUserById(id); // Obtiene un usuario por ID usando el DAO
        return result; // Retorna el resultado
    }

    // Guarda un nuevo usuario
    saveUser = async (user) => {
        let userToInsert = new UserDTO(user); // Crea un DTO de usuario
        let result = await this.dao.saveUser(userToInsert); // Guarda un nuevo usuario usando el DAO
        return result; // Retorna el resultado
    }

    // Actualiza un usuario
    updateUser = async (id,user) => {
        let userToUpdate = new UserDTO(user); // Crea un DTO de usuario
        let result = await this.dao.updateUser(id ,userToUpdate); // Actualiza un usuario usando el DAO
        return result; // Retorna el resultado
    }

    // Elimina un usuario
    deleteUser = async (id) => {
        let result = await this.dao.deleteUser(id); // Elimina un usuario usando el DAO
        return result; // Retorna el resultado
    }
}