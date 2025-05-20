import mongoose from "mongoose";

const collection = "user";

const userSchema = new mongoose.Schema ({
    name : String,
    email : String,
    role: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'order'
        }
        
    ], default: []
})

const userModel = mongoose.model(collection, userSchema);

export default userModel;