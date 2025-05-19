import UserRepository from '../repositories/user.repository.js';
import logger from '../config/logger.js';  // Usamos el logger en lugar de console.error

const userService = new UserRepository();

export const current = async (req, res, next) => {
    const userId = req.session?.user;

    // Si no hay un userId en la sesión, simplemente continuamos
    if (!userId) {
        return next();
    }

    try {
        // Intentamos obtener el usuario de la base de datos
        const user = await userService.getUserById(userId);

        // Si no se encuentra el usuario, también continuamos
        if (!user) {
            return next();
        }

        // Si se encuentra el usuario, lo adjuntamos a la solicitud
        req.user = user;
        next(); // Continuamos al siguiente middleware o controlador

    } catch (error) {
        // Logueamos el error para tener un control más detallado
        logger.error(`Error fetching user with ID ${userId}: ${error.message}`);
        
        // Si hay un error, simplemente continuamos con la ejecución
        next();
    }
};
