import React, { useState } from 'react'

export const Home = () => {
    const [task, setTask] = useState('');
    const [store, setStore] = useState([])

    const handleTask = () => {
        setStore([...store, task]);
        setTask('');
    }



  return (
    <div>
        <input value={task} type="text" placeholder='Enter todo' onChange={(e) =>  setTask(e.target.value)}/>
        <button onClick={handleTask}>Add</button>

        {store.map((item, index) => {
            return(
                <div>
                    <p>{item}</p>
                </div>
                
            )
        })}
        
    </div>
  )
}
