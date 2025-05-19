import UserRepository from '../repositories/user.repository.js';
import logger from '../config/logger.js';
import { UserResponseDTO, UserRequestDTO } from '../dao/dto/user.dto.js'; // Importamos los DTOs

const userService = new UserRepository();

export const getUsers = async (req, res) => {
  try {
    const result = await userService.getUsers();

    // Usamos el DTO para transformar los usuarios
    const transformedUsers = result.map(user => new UserResponseDTO(user));

    res.send({ status: "success", result: transformedUsers });
    logger.info('Get users');
  } catch (error) {
    logger.error(`Error getting users: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error retrieving users" });
  }
};

export const saveUser = async (req, res) => {
  try {
    const userData = new UserRequestDTO(req.body);  // Usamos el DTO para transformar la solicitud
    const result = await userService.saveUser(userData);

    // Usamos el DTO para transformar la respuesta
    const transformedUser = new UserResponseDTO(result);

    res.send({ status: "success", result: transformedUser });
    logger.info('Save user');
  } catch (error) {
    logger.error(`Error saving user: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error saving user" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await userService.getUserById(uid);

    if (!user) {
      logger.warn(`User not found: ${uid}`);
      return res.status(404).send({ status: "error", message: "User not found" });
    }

    // Usamos el DTO para transformar la respuesta
    const result = new UserResponseDTO(user);
    res.send({ status: "success", result });
    logger.info(`Get user by id: ${uid}`);
  } catch (error) {
    logger.error(`Error getting user by ID: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error retrieving user" });
  }
};
