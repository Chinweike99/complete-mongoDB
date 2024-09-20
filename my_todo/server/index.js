import express from 'express';
import cors from 'cors';
import TodoTask from './user.js';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(cors());

// mongoose.connect('mongodb://localhost:27017/test')
mongoose.connect('mongodb://localhost:27017/todo')
.then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB:', err));;

app.get('/getTodo', (req, res) => {
    TodoTask.find().then(result => res.json(result)).catch(error => console.log(error))
})

app.post('/create', (req, res) => {
    const task = req.body.task;
    TodoTask.create({
        task, done: false
    }).then(output => res.json(output)).catch(err => console.log(err))
})


app.delete('/remove/:id', (req, res) => {
    const {id} = req.params
 TodoTask.findByIdAndDelete(id)
 .then(response => res.json(response)).catch(err => console.log(err))
})


app.listen(3003, ()=>{
    console.log("LISTENING ON PORT 3003")
})