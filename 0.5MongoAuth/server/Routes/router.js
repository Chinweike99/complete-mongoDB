/** Routes Requests been sent to our folder
  */ 
 import express from 'express';
 const router = express.Router();
 import signSchemaModel from '../Models/model.js';

 router.post('/signup', (req, res) => {
    const signupUser = new signSchemaModel({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    signupUser.save().then(result => res.json(result))
    .catch(error => res.json(error))
 });

 export default router;