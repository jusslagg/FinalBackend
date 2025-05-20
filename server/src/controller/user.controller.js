import UserRepository from '../repositories/user.repository.js';
import logger from '../config/logger.js';
import { UserResponseDTO, UserRequestDTO } from '../dao/dto/user.dto.js';

const userService = new UserRepository();

// GET /api/user
export const getUsers = async (req, res) => {
  try {
    const result = await userService.getUsers();
    const transformedUsers = result.map(user => new UserResponseDTO(user));

    res.send({ status: "success", result: transformedUsers });
    logger.info('Get users');
  } catch (error) {
    logger.error(`Error getting users: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error retrieving users" });
  }
};

// GET /api/user/:uid
export const getUserById = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await userService.getUserById(uid);

    if (!user) {
      logger.warn(`User not found: ${uid}`);
      return res.status(404).send({ status: "error", message: "User not found" });
    }

    const result = new UserResponseDTO(user);
    res.send({ status: "success", result });
    logger.info(`Get user by id: ${uid}`);
  } catch (error) {
    logger.error(`Error getting user by ID: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error retrieving user" });
  }
};

// POST /api/user
export const saveUser = async (req, res) => {
  try {
    const userData = new UserRequestDTO(req.body);
    const result = await userService.saveUser(userData);
    const transformedUser = new UserResponseDTO(result);

    res.status(201).send({ status: "success", result: transformedUser });
    logger.info('User saved successfully');
  } catch (error) {
    logger.error(`Error saving user: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error saving user" });
  }
};

// PUT /api/user/:uid
export const updateUser = async (req, res) => {
  try {
    const { uid } = req.params;
    const userExists = await userService.getUserById(uid);

    if (!userExists) {
      logger.warn(`User not found: ${uid}`);
      return res.status(404).send({ status: "error", message: "User not found" });
    }

    const updatedUserData = new UserRequestDTO(req.body);
    await userService.updateUser(uid, updatedUserData);

    res.send({ status: "success", message: "User updated successfully" });
    logger.info(`User updated: ${uid}`);
  } catch (error) {
    logger.error(`Error updating user: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error updating user" });
  }
};

// DELETE /api/user/:uid
export const deleteUser = async (req, res) => {
  try {
    const { uid } = req.params;
    const userExists = await userService.getUserById(uid);

    if (!userExists) {
      logger.warn(`User not found: ${uid}`);
      return res.status(404).send({ status: "error", message: "User not found" });
    }

    await userService.deleteUser(uid);
    res.send({ status: "success", message: "User deleted successfully" });
    logger.info(`User deleted: ${uid}`);
  } catch (error) {
    logger.error(`Error deleting user: ${error.message}`);
    res.status(500).send({ status: "error", message: "Error deleting user" });
  }
};
