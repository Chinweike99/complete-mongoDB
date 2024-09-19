import React, { useState } from 'react'
import { Create } from './Create'

export const Home = () => {
    const [todos, setTodos] = useState([]);
    return (
    <div>
       <h2> My Todo</h2>

        <Create />
        {   
        todos.length === 0 ? <h4>No result</h4> :
            todos.map(todo => {
                <div>
                    {todo}
                </div>
            })
        }
    </div>
  )
}
