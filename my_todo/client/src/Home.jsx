import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import { json } from 'body-parser';

export const Home = () => {
    const [task, setTask] = useState('');
    const [store, setStore] = useState([])

    const getTodos =()=>{
        axios.get("http://localhost:3003/getTodo").then(res => setStore(res.data))
        .catch(error => console.log(error));
    }


    const handleTask = () => {
        axios.post('http://localhost:3003/create', { task })
        .then(() => {setTask(''); getTodos();}).catch(err => console.log(err));
        // setStore([...store, task]);
        // setTask('');
    }

    const handleDelete = (id) => {
        axios.delete("http://localhost:3003/remove/" + id)
        .then(()=> getTodos()).catch(err => console.log(err, "Cant delete"));
    }

    useEffect(() => {
        getTodos();
    }, []);

  return (
    <div>
        <input value={task} type="text" placeholder='Enter todo' onChange={(e) =>  setTask(e.target.value)}/>
        <button onClick={handleTask}>Add</button>

        {store.map((item, index) => {
            return(
                <div>
                    <p>{item.task} 
                        <span onClick={()=>handleDelete(item._id)} style={{color: "red", cursor: "pointer", fontWeight: "800", marginLeft: "20px"}}>
                            X
                        </span>
                        </p> 
                </div>
                
            )
        })}
        
    </div>
  )
}
