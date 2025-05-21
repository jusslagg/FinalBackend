import userModel from "./models/user.model.js";

export default class User{
    
    // Obtiene todos los usuarios
    getUser = async () => {
        try{
            let allUsers = await userModel.find(); // Busca todos los usuarios en la base de datos
            return allUsers; // Retorna todos los usuarios
        }
        catch(error){
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }

    // Obtiene un usuario por ID
    getUserById = async (id) => {
        try{
            let user = await userModel.findOne({_id: id}); // Busca un usuario por ID en la base de datos
            return user; // Retorna el usuario encontrado
        }
        catch(error){
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }

    // Guarda un nuevo usuario
    saveUser = async (user) => {
        try{
            let userCreated = await userModel.create(user); // Crea un nuevo usuario en la base de datos
            return userCreated; // Retorna el usuario creado
        }
        catch(error){
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }

    // Actualiza un usuario
    updateUser = async (id, user) => {
        try{
            let userUpdated = await userModel.updateOne({_id : id}, {$set: user}); // Actualiza un usuario en la base de datos
            return userUpdated; // Retorna el usuario actualizado
        }
        catch(error){
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }

    // Elimina un usuario
    deleteUser = async (id, user) => {
        try{
            let userdeleted = await userModel.deleteOne({_id : id}, {$set: user}); // Elimina un usuario de la base de datos
            return userdeleted; // Retorna el usuario eliminado
        }
        catch(error){
            console.log(error); // Imprime el error en la consola
            return null // Retorna null si hay un error
        }
    }
}