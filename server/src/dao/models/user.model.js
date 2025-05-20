import mongoose from "mongoose";

const collection = "user";

const userSchema = new mongoose.Schema ({
    name : String,
    email : String,
    role: {
        type : String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    }

})

const userModel = mongoose.model(collection, userSchema);

export default userModel;