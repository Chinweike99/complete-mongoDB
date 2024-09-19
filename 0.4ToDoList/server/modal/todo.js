import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.model('todos', todoSchema)
// module.exports =  TodoModel
export default TodoModel;