import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import TodoModel from './modal/todo.js'

const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect('mongodb://localhost:27017/test')

app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


app.post('/add', (req, res) => {
    const task = req.body.inputs;

    TodoModel.create({
        task, done: false
    }).then(result => res.json(result)).catch(error => res.json(error))
})


app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    const { task, done} = req.body
     TodoModel.findByIdAndUpdate(id, {task, done}, { new: true }, {done: true})
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

app.delete('/remove/:id', (req, res) => {
    const {id} = req.params;
    const { task, done} = req.body
     TodoModel.findByIdAndDelete(id)
    .then(result => res.json(result))
    .catch(error => res.json(error))
})


app.listen(3002, () => {
    console.log("Server Running on port 3002")
})