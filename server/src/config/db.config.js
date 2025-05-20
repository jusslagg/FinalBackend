import mongoose from "mongoose";    

const connectDB = async (url) => {
    try{
        const conn = await mongoose.connect(url)
        console.log(`database connected`);
        return conn;
    } catch(error){
        console.log(error);
        process.exit();
    }
}

export default connectDB;