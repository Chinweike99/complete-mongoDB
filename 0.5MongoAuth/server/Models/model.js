import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true },
    email: {type: String, required: true},
    password: { type: String, required: true},
    date: {
        type: Date,
        default: Date.now()
    }
});

const signSchemaModel = mongoose.model("mytable", signupSchema);
export default signSchemaModel;