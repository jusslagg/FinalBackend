import userModel from "./models/user.model.js";

export default class User {

  getUser = async () => {
    try {
      const allUsers = await userModel.find().populate('orders');
      return allUsers;
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      return null;
    }
  }

  getUserById = async (id) => {
    try {
      const user = await userModel.findById(id).populate('orders');
      return user;
    } catch (error) {
      console.error("Error al obtener usuario por ID:", error);
      return null;
    }
  }

  saveUser = async (user) => {
    try {
      const userCreated = await userModel.create(user);
      return userCreated;
    } catch (error) {
      console.error("Error al guardar usuario:", error);
      return null;
    }
  }

  updateUser = async (id, userData) => {
    try {
      const result = await userModel.updateOne({ _id: id }, { $set: userData });
      return result.modifiedCount > 0 ? await userModel.findById(id) : null;
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      return null;
    }
  }

  deleteUser = async (id) => {
    try {
      const result = await userModel.deleteOne({ _id: id });
      return result.deletedCount > 0;
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      return false;
    }
  }
}
