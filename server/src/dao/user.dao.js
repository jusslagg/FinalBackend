import mongoose from 'mongoose';
import userModel from './models/user.model.js';
import { UserRequestDTO, UserResponseDTO } from './dto/user.dto.js';
import logger from '../config/logger.js';

export default class User {
  // Obtener todos los usuarios
  getUsers = async () => {
    try {
      const users = await userModel.find();
      return users.map(user => new UserResponseDTO(user));
    } catch (error) {
      logger.error(`Error getting users: ${error.message}`);
      return null;
    }
  }

  // Obtener un usuario por su ID
  getUserById = async (id) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        logger.warn(`Invalid user ID: ${id}`);
        return null;
      }

      const user = await userModel.findOne({ _id: id });
      return user ? new UserResponseDTO(user) : null;
    } catch (error) {
      logger.error(`Error getting user by id ${id}: ${error.message}`);
      return null;
    }
  }

  // Crear un nuevo usuario
  saveUser = async (user) => {
    try {
      const userToInsert = new UserRequestDTO(user);
      const userCreated = await userModel.create(userToInsert);
      return new UserResponseDTO(userCreated);
    } catch (error) {
      logger.error(`Error creating user: ${error.message}`);
      return null;
    }
  }

  // Actualizar un usuario
  updateUser = async (id, user) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        logger.warn(`Invalid user ID: ${id}`);
        return null;
      }

      const userUpdated = await userModel.findOneAndUpdate(
        { _id: id },
        { $set: user },
        { new: true }
      );
      return userUpdated ? new UserResponseDTO(userUpdated) : null;
    } catch (error) {
      logger.error(`Error updating user with id ${id}: ${error.message}`);
      return null;
    }
  }

  // Eliminar un usuario
  deleteUser = async (id) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        logger.warn(`Invalid user ID: ${id}`);
        return null;
      }

      const result = await userModel.deleteOne({ _id: id });
      return result.deletedCount > 0;
    } catch (error) {
      logger.error(`Error deleting user with id ${id}: ${error.message}`);
      return null;
    }
  }
}
