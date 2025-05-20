import UserRepository from "../repositories/user.repository.js";

const userService = new UserRepository();

export const getUserById = async (req, res) => {
    const {uid} = req.params;
    let result = await userService.getUserById(uid);
    res.send({status: "success", result});
}

export const getUsers = async (req, res) => {
    let result = await userService.getUser();
    res.send({status: "success", result});
}

export const saveUser = async (req, res) => {
    const user = req.body;
    let result = await userService.saveUser(user);
    res.send({status: "success", result});
}

export const updateUser = async (req, res) => {
    const {uid} = req.params;
    const user = req.body;
    let result = await userService.updateUser(uid,user);
    res.send({status: "success", result});
}

export const deleteUser = async (req, res) => {
    const {uid} = req.params;
    let result = await userService.deleteUser(uid);
    res.send({status: "success", result});
}