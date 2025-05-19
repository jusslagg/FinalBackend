import { Router } from 'express';
import { getUsers, saveUser, getUserById } from '../controller/user.controller.js';
import logger from '../config/logger.js';

const router = Router();

router.get('/', (req, res, next) => {
  logger.info('GET /api/user');
  next();
}, getUsers);
router.get('/:uid', (req, res, next) => {
  logger.info(`GET /api/user/${req.params.uid}`);
  next();
}, getUserById);
router.post('/', (req, res, next) => {
  logger.info('POST /api/user');
  next();
}, saveUser);

export default router;