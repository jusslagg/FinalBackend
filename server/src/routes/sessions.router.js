import Router from './js/router.js';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import UserModel from '../dao/models/user.model.js';

export default class SessionRouter extends Router{


    init(){
        this.post('/login', ["PUBLIC"], async (req, res) => {
            const { email, password } = req.body;
        
            try {
                const user = await UserModel.findOne({ email, password });
                
                if (!user) {
                    return res.sendUserError("Credenciales inválidas");
                }
        
                let token = jwt.sign(
                    {
                        email: user.email,
                        role: user.role,
                        _id: user._id.toString()
                    },
                    config.secret_JWT,
                    { expiresIn: "24h" }
                );
        
                res.sendSuccess(token);
            } catch (error) {
                console.log(error);
                res.sendServerError("Error interno al iniciar sesión");
            }
        });

        this.get('/current', ["USER", "ADMIN"], (req, res) => {
            res.sendSuccess({
                email: req.user.email,
                role: req.user.role
            });
        });
    }
}