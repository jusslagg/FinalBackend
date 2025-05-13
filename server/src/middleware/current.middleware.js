import UserRepository from '../repositories/user.repository.js';

const userService = new UserRepository();

export const current = async (req, res, next) => {
    const userId = req.session?.user;
    if (!userId) {
        return next();
    }
    try {
        const user = await userService.getUserById(userId);
        if (!user) {
            return next();
        }
        req.user = user;
    } catch (error) {
        console.error("Error fetching user:", error);
    }
    next();
};