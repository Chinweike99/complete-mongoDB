import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
});

const TodoTask = mongoose.model("User", userSchema);
export default TodoTask;