import { useState } from 'react';
import './App.css';
import axios from 'axios';
// import { application } from 'express';

function App() {

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }


  const registerUser = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3004/app/signup", formData)
    .then(res => {
      console.log("User registered successfully", res.data);
      setFormData({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    }).catch(err => console.log(err));

    setFormData('');
  }



  return (
    <div className="App">
      <div className='appDiv'>
        <form  onSubmit={registerUser}>
          <input value={formData.fullName} name='fullName' type='text' placeholder='Full Name' onChange={handleChange}/>

          <input value={formData.username} name='username' type='text' placeholder='Username' onChange={handleChange}/>

          <input value={formData.email} name='email' type='email' placeholder='example@mail.com' onChange={handleChange}/>

          <input value={formData.password} name='password' type='password' placeholder='Password' onChange={handleChange}/>

          <input name='confirmPassword' type='password' 
          placeholder='Confirm Password' onChange={handleChange}/>

          <input type='submit' value="Register"/>
        </form>
      </div>
      <button>Register</button>
      <button>Submit</button>
    </div>
  );
}

export default App;
