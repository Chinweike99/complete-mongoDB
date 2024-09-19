import React, { useState } from 'react';
import axios from 'axios';

export const Create = ({ fetchTodos }) => {
    const [inputs, setInputs] = useState('');  // Initialize with an empty string

    const handleAdd = () => {
        axios.post('http://localhost:3002/add', { inputs })
            .then(() => {
                setInputs('');  // Clear the input field after adding
                fetchTodos();  // Refresh the todos
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <input
                type='text'
                placeholder='todo'
                value={inputs}  // Set input value
                onChange={(e) => setInputs(e.target.value)}
            />
            <button type='button' onClick={handleAdd}>Add</button>
        </div>
    );
};
