import UserRepository from '../repositories/user.repository.js';
import logger from '../config/logger.js';

const userService = new UserRepository();

export const getUsers = async (req, res) => {
    let result = await userService.getUsers();
    res.send({status: "success", result});
    logger.info('Get users');
}

export const saveUser = async (req, res) => {
    const user = req.body; //No es necesario hacer las validaciones acá, las hago usando DTO
    let result = await userService.saveUser(user);
    res.send({status: "success", result});
    logger.info('Save user');
}


export const getUserById = async (req, res) => {

    const {uid} = req.params.uid;
    let user = await userService.getUserById(req.params.uid);
    if(!user) return res.status(404).send({status:"error", error:"User not found"});
    let result = new UserResponseDTO(user);
    res.send({status: "success", result});
    logger.info(`Get user by id: ${req.params.uid}`);
}