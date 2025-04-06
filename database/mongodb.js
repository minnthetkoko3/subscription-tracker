import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error("define MONGODB_URI in environment variable inside")
};

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);

        console.log(`connect DB in ${NODE_ENV} mode`)
    } catch (error) {
        console.error("error connecting to DB", error)
    }
}

export default connectDB;