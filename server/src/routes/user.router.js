import {Router} from 'express'; // Importa el Router de Express
import {getUsers, getUserById, saveUser, updateUser, deleteUser} from '../controller/user.controller.js'; // Importa las funciones del controlador de usuarios
import { authorize } from '../middleware/authorization.middleware.js';

const router = Router(); // Crea una instancia del Router de Express

// Ruta para obtener todos los usuarios - Solo ADMIN
router.get('/', authorize(["ADMIN"]), getUsers);


// Ruta para obtener un usuario por ID - ADMIN or Self
router.get('/:uid', authorize(["ADMIN", "USER"]), getUserById);


// Ruta para crear un nuevo usuario - Solo ADMIN
router.post('/', authorize(["ADMIN"]), saveUser);


// Ruta para actualizar un usuario - Solo ADMIN
router.put('/:uid', authorize(["ADMIN", "USER"]), updateUser);


// Ruta para eliminar un usuario - Solo ADMIN
router.delete('/:uid', authorize(["ADMIN"]), deleteUser);

export default router; // Exporta el router

