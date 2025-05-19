import userModel from "./models/user.model.js";
import { UserRequestDTO, UserResponseDTO } from "./dto/user.dto.js";
import logger from '../config/logger.js';  // Usamos el logger

export default class User {

    // Obtener todos los usuarios
    getUsers = async () => {
        try {
            let users = await userModel.find();
            // Convertimos los usuarios a DTO para devolverlos con un formato estándar
            return users.map(user => new UserResponseDTO(user));
        } catch (error) {
            logger.error(`Error getting users: ${error.message}`);
            return null;
        }
    }

    // Obtener un usuario por su ID
    getUserById = async (id) => {
        try {
            let user = await userModel.findOne({ _id: id });
            if (user) {
                return new UserResponseDTO(user); // Devolvemos el DTO con los datos del usuario
            }
            return null;
        } catch (error) {
            logger.error(`Error getting user by id ${id}: ${error.message}`);
            return null;
        }
    }

    // Guardar un nuevo usuario
    saveUser = async (user) => {
        try {
            let userToInsert = new UserRequestDTO(user);  // Convertimos el objeto a DTO antes de guardarlo
            let userCreated = await userModel.create(userToInsert);
            return new UserResponseDTO(userCreated);  // Devolvemos el usuario creado en formato DTO
        } catch (error) {
            logger.error(`Error creating user: ${error.message}`);
            return null;
        }
    }

    // Actualizar un usuario
    updateUser = async (id, user) => {
        try {
            // Usamos 'findOneAndUpdate' para obtener el usuario actualizado
            let userUpdated = await userModel.findOneAndUpdate({ _id: id }, { $set: user }, { new: true });
            if (userUpdated) {
                return new UserResponseDTO(userUpdated); // Devolvemos el usuario actualizado en formato DTO
            }
            return null;
        } catch (error) {
            logger.error(`Error updating user with id ${id}: ${error.message}`);
            return null;
        }
    }
}
// En este código, hemos implementado un DAO para manejar la persistencia de los usuarios en MongoDB.
// Hemos utilizado un DTO para estandarizar la forma en que los datos de los usuarios son enviados y recibidos.
// Esto nos permite tener un control más estricto sobre la estructura de los datos y facilita la validación y transformación de los mismos.
// Además, hemos agregado un logger para registrar los errores y eventos importantes en el flujo de la aplicación.
// Esto es útil para el monitoreo y la depuración de la aplicación en producción.
// También hemos implementado métodos para obtener todos los usuarios, obtener un usuario por ID, guardar un nuevo usuario y actualizar un usuario existente.
// Estos métodos interactúan con la base de datos a través del modelo de usuario y devuelven los resultados en un formato estandarizado utilizando los DTOs.