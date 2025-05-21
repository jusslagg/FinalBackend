// DTO para el usuario
export default class UserDTO{

    constructor(user){
            this.name= user.name; // Nombre del usuario
            this.email = user.email; // Email del usuario
            this.role = user.role ? user.role : "user_role"; // Rol del usuario, por defecto "user_role"
    }
    
}