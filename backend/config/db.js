import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Db connection successfully")
    } catch (error) {
        console.log("Error while connecting db", error)
    }
}

export default connectDb