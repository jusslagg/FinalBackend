import { UserRequestDTO, UserResponseDTO } from "../dao/dto/user.dto.js";
import UserDao from "../dao/user.dao.js";

export default class UserRepository {

    constructor() {
        this.dao = new UserDao();
    }

    // Obtener todos los usuarios
    getUsers = async () => {
        try {
            let result = await this.dao.getUsers();
            return result;
        } catch (error) {
            console.error(`Error fetching users: ${error.message}`);
            throw new Error('Error fetching users');
        }
    }

    // Obtener un usuario por su ID
    getUserById = async (id) => {
        try {
            let result = await this.dao.getUserById(id);
            if (!result) {
                throw new Error('User not found');
            }
            return new UserResponseDTO(result);
        } catch (error) {
            console.error(`Error fetching user by ID: ${error.message}`);
            throw new Error(`Error fetching user by ID: ${error.message}`);
        }
    }

    // Guardar un nuevo usuario
    saveUser = async (user) => {
        try {
            let userToInsert = new UserRequestDTO(user);
            let result = await this.dao.saveUser(userToInsert);
            return result;
        } catch (error) {
            console.error(`Error saving user: ${error.message}`);
            throw new Error('Error saving user');
        }
    }

    // Actualizar un usuario existente
    updateUser = async (id, user) => {
        try {
            let userToUpdate = new UserRequestDTO(user);
            let result = await this.dao.updateUser(id, userToUpdate);
            return result;
        } catch (error) {
            console.error(`Error updating user: ${error.message}`);
            throw new Error('Error updating user');
        }
    }

    // Eliminar un usuario
    deleteUser = async (id) => {
        try {
            let result = await this.dao.deleteUser(id);
            return result;
        } catch (error) {
            console.error(`Error deleting user: ${error.message}`);
            throw new Error('Error deleting user');
        }
    }
}
