import React, { useEffect, useState } from 'react'
import { Create } from './Create'
import axios from 'axios';

export const Home = () => {
    const [todos, setTodos] = useState([]);

   
     // Fetch todos when the component mounts
     useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = () => {
        axios.get('http://localhost:3002/get')
            .then(res => setTodos(res.data))
            .catch(err => console.log(err));
    };

    const handleEdit = (id) => {
        axios.put('http://localhost:3002/update/' + id, { done: true })  // Change 'done' field
        .then(() => fetchTodos())  // Refresh the list
        .catch(err => console.log(err));
    };


    const handleDlete = (id) => {
        axios.delete('http://localhost:3002/remove/' + id)  // Change 'done' field
        .then(() => fetchTodos())  // Refresh the list
        .catch(err => console.log(err));
    }

    return (
    <div>
       <h2> My Todo</h2>

        <Create fetchTodos={fetchTodos} />
        {   
        todos.length === 0 ? <h4>No result</h4> :
            todos.map(todo => (
                <div>
                    <span style={{color: "green", marginRight: "18px", cursor: "pointer"}} onClick={() => handleEdit(todo._id)}>O</span>
                    <p contentEditable={true}>{todo.task}</p> 
                    <span style={{color: "red", marginLeft: "15px", cursor: "pointer"}} onClick={() => handleDlete(todo._id)}>X</span>
                </div>
            ))
        }
    </div>
  )
}
