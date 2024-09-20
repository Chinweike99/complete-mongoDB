/** Routes Requests been sent to our folder
  */ 
 import express from 'express';
 const router = express.Router();
 import bcrypt from 'bcrypt'
 import signSchemaModel from '../Models/model.js';

 const app = express();
 app.use(express.json());

 router.post('/signup', async (req, res) => {
  console.log(req.body);

  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hashSync(req.body.password, salt)


    const signupUser = new signSchemaModel({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    })
    signupUser.save().then(result => res.json(result))
    .catch(error => res.json(error))
 });

 export default router;