const express = require('express');
const {connectToDb, getDb} = require('./db');
const { ObjectId } = require('mongodb');

const app = express();
const port = 3100;
app.use(express.json())


// db Connection
let db
connectToDb((err) => {
    if(!err){
        app.listen(port, ()=> {
            console.log(`LISTENING ON http://localhost:${port}`)
        });
        db = getDb();
    }
})



// ROutes
app.get('/books', (req, res) => {
    let books = [];
    db.collection('books').find().sort({author: 1}).limit(3).forEach(book => books.push(book)).then(() => {
        res.status(200).json(books)
    }).catch(()  => {
        res.status(500).json({error: 'Could not fetch documents'})
    })

    // res.json({message: "Welcome to mongoDB"})
})

// Fetching a specific id
app.get('/books/:id', (req, res) => {

    // Check if the provided id is valid
    if(ObjectId.isValid(req.params.id)){

        // if valid, then
        db.collection('books').findOne({_id: new ObjectId(req.params.id)}).then(doc => {
            res.status(200).json(doc)
        }).catch(err => {
            res.status(500).json({error: "Document does not exist"})
        })
    }else{
        res.status(500).json({error: "Not Valid"})
    }

})

app.post('/books', (req, res) => {
    const book = req.body

    db.collection('books').insertOne(book).then(result => {
        res.status(201).json(result)
    }).catch(err => {
        res.status(500).json({err: "Unable to create document"})
    })
    // res.json({message: "Here are your books"});
})


app.delete('/books/:id', (req, res) => {
    // Check if the provided id is valid
    if(ObjectId.isValid(req.params.id)){

        // if valid, then
        db.collection('books').deleteOne({_id: new ObjectId(req.params.id)}).then(result => {
            res.status(200).json(result)
        }).catch(err => {
            res.status(500).json({error: "Documment not deleted"})
        })
    }else{
        res.status(500).json({error: "Not Valid"})
    }

})

app.patch('/books/:id', (req, res) => {
    const updates = req.body;

    // Check if the provided id is valid
    if(ObjectId.isValid(req.params.id)){

        // if valid, then
        db.collection('books').updateOne({_id: new ObjectId(req.params.id)}, {$set: updates}).then(result => {
            res.status(200).json(result)
        }).catch(err => {
            res.status(500).json({error: "Documment not updated"})
        })
    }else{
        res.status(500).json({error: "Not Valid"})
    }
})