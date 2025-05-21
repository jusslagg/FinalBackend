export const authorize = (roles) => {
    // roles puede ser una cadena o un array de cadenas - roles can be a string or an array of strings
    return (req, res, next) => {
        // Verificamos si el usuario está autenticado - Check if the user is authenticated
        if (!req.user) {
            return res.status(401).send({ status: "error", message: "Unauthorized - No user found" });
        }

        // Si roles es una cadena, lo convertimos a un array para facilitar la comparación - If roles is a string, convert it to an array for easier comparison
        if (typeof roles === 'string') {
            roles = [roles];
        }

        // Verificamos si el usuario tiene el rol adecuado o es el mismo usuario - Check if the user has the appropriate role or is the same user
        if (!roles.includes(req.user.role) && req.params.uid !== req.user._id) {
            return res.status(403).send({ status: "error", message: "Forbidden - Insufficient permissions" });
        }

        // Si todo está bien, pasamos al siguiente middleware o controlador - If everything is ok, pass to the next middleware or controller
        next();
    };
};
