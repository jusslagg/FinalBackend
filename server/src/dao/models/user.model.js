import mongoose from "mongoose";

const collection = "user";

const userSchema = new mongoose.Schema ({
    first_name : { type: String, required: true },
    last_name : { type: String, required: true },
    email : { type: String, required: true, unique: true },
    password : { type: String, required: true },
    role: { type: String, default: 'user' },
    orders: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'order'
        }
        
    ], default: []
})

const userModel = mongoose.model(collection, userSchema);

export default userModel;