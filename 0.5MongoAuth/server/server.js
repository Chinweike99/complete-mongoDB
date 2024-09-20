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


 /** MIDDLEWARES */   
// app.use(express.json()); 
app.use(express.json()) // Acivates body-parser
app.use(cors());

/* Initialise the route as a middleware.
   app: This is the base
   router: imported route url from router.js, this would be appended to the base part..
*/
app.use('/app', router); // This connects the routes to our server


app.listen(PORT, ()=> {
    console.log(`LISTENING ON http://localhost:${PORT}`)
})