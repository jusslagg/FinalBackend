import UserDTO from "../dao/dto/user.dto.js";
import UserDao from "../dao/user.dao.js";

export default class UserRepository {
    constructor() {
        this.dao = new UserDao();
    }

    getUser = async () => {
        let result = await this.dao.getUser();
        return result;
    }

    getUserById = async (id) => {
        let result = await this.dao.getUserById(id);
        return result;
    }

    saveUser = async (user) => {
        let userToInsert = new UserDTO(user);
        let result = await this.dao.saveUser(userToInsert);
        return result;
    }

    updateUser = async (id,user) => {
        let userToUpdate = new UserDTO(user);
        let result = await this.dao.updateUser(id ,userToUpdate);
        return result;
    }

    deleteUser = async (id) => {
        let result = await this.dao.deleteUser(id);
        return result;
    }
}