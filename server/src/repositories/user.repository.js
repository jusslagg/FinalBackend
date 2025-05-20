import UserDTO from "../dao/dto/user.dto.js";
import UserDao from "../dao/user.dao.js";

export default class UserRepository {
  constructor() {
    this.dao = new UserDao();
  }

  getUsers = async () => {
    const users = await this.dao.getUser();
    return users.map(user => new UserDTO(user));
  }

  getUserById = async (id) => {
    const user = await this.dao.getUserById(id);
    return user ? new UserDTO(user) : null;
  }

  saveUser = async (user) => {
    // Aquí NO usamos DTO: se debe guardar toda la info, como password, names, etc.
    const result = await this.dao.saveUser(user);
    return result ? new UserDTO(result) : null;
  }

  updateUser = async (id, userData) => {
    // También usamos los datos originales, no DTO
    const result = await this.dao.updateUser(id, userData);
    return result ? new UserDTO(result) : null;
  }

  deleteUser = async (id) => {
    return await this.dao.deleteUser(id);
  }
}
