import mongoose from "mongoose";
import options from "dotenv/lib/env-options";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required"],
        trim: true,
        minlength: 5,
        maxlength: 30,
    },
    email: {
        type: String,
        required: [true, "User email is required"],
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
    },
    password: {
        type: String,
        required: [true, "User password is required"],
        minlength: 6,
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
