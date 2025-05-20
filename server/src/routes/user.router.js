import {Router} from 'express';
import {getUsers, getUserById, saveUser, updateUser, deleteUser} from '../controller/user.controller.js';

const router = Router();

//obtener ususarios
router.get('/', getUsers);


//obtener un usuario
router.get('/:uid', getUserById);


//crear un usuario
router.post('/', saveUser);


//actualizar un usuario
router.put('/:uid', updateUser);


//borrar un usuario
router.delete('/:uid', deleteUser);

export default router;