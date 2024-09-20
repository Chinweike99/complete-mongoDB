import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './Routes/router.js';

const app = express();
dotenv.config()
const PORT = 3004

// Connect mongoose with mongodb database
mongoose.connect(process.env.MONGOOSE)
.then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB:', err));


app.use('/app', router);


app.listen(PORT, ()=> {
    console.log(`LISTENING ON http://localhost:${PORT}`)
})