import Router from './js/router.js'; // Importa la clase Router
import jwt from 'jsonwebtoken'; // Importa la librería jsonwebtoken
import config from '../config/config.js'; // Importa la configuración de la aplicación
import UserModel from '../dao/models/user.model.js'; // Importa el modelo de usuarios

export default class SessionRouter extends Router{ // Exporta la clase SessionRouter


    init(){
        // Definir la ruta para el login
        this.post('/login', ["PUBLIC"], async (req, res) => {
            // Extraer email y password del cuerpo de la request
            const { email, password } = req.body;
        
            try {
                // Buscar el usuario en la base de datos
                const user = await UserModel.findOne({ email, password });
                
                // Si no existe el usuario, retornar un error
                if (!user) {
                    return res.sendUserError("Credenciales inválidas");
                }
        
                // Crear el token JWT
                let token = jwt.sign(
                    {
                        email: user.email,
                        role: user.role,
                        _id: user._id.toString()
                    },
                    config.secret_JWT, // Usar la clave secreta del archivo de configuración
                    { expiresIn: "24h" } // El token expira en 24 horas
                );
        
                res.sendSuccess(token); // Enviar el token al cliente
            } catch (error) {
                console.log(error);
                res.sendServerError("Error interno al iniciar sesión"); // Manejar errores internos
            }
        });

        // Ruta para obtener el usuario actual
        this.get('/current', ["USER", "ADMIN"], (req, res) => {
            res.sendSuccess({ // Enviar los datos del usuario actual
                email: req.user.email,
                role: req.user.role
            });
        });
    }
}