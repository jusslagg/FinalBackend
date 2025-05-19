import { Router } from 'express';
import { getUsers, saveUser, getUserById } from '../controller/user.controller.js';
import logger from '../config/logger.js';

const router = Router();

// Obtener todos los usuarios
router.get('/', (req, res, next) => {
  logger.info('GET /api/user'); // Log de la petición
  next();
}, getUsers);

// Obtener un usuario por ID
router.get('/:uid', (req, res, next) => {
  logger.info(`GET /api/user/${req.params.uid}`); // Log con el parámetro de ID de usuario
  next();
}, getUserById);

// Crear un nuevo usuario
router.post('/', (req, res, next) => {
  logger.info('POST /api/user'); // Log de la creación de un nuevo usuario
  next();
}, saveUser);

export default router;
