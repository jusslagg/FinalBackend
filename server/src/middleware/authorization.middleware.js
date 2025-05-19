export const authorize = (roles) => {
    // roles puede ser una cadena o un array de cadenas
    return (req, res, next) => {
        // Verificamos si el usuario está autenticado
        if (!req.user) {
            return res.status(401).send({ status: "error", message: "Unauthorized - No user found" });
        }

        // Si roles es una cadena, lo convertimos a un array para facilitar la comparación
        if (typeof roles === 'string') {
            roles = [roles];
        }

        // Verificamos si el usuario tiene el rol adecuado
        if (!roles.includes(req.user.role)) {
            return res.status(403).send({ status: "error", message: "Forbidden - Insufficient permissions" });
        }

        // Si todo está bien, pasamos al siguiente middleware o controlador
        next();
    };
};
