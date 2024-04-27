import React, { useState, useEffect }from 'react'

export default function UserName() {
    const [name, setName] = useState('');
    const handleChange = (e) => {
        setName(e.target.value);
    }
    useEffect(() => {
        // runs side effect here
        console.log("mounted or rendered")
        // does clean up here
        return () => {
            console.log("clean up - unmounted")
        }
    },
        // array of dependencies
        // if empty, only runs once
        // if not empty, runs when any of the values change
        // if no array, runs every time
        // in index.js we deleted <React.StrictMode> around <App /> to make it run only once (since we are in development mode and otherwise it would run twice: once in strict mode and once in normal mode)
        [{name}]
    )
  return (
    <div className='group'>
        <h1>{name}</h1>
        <div className='input'>
            <input 
                type="text" 
                id="username"
                value={name}
                onChange = {handleChange}>
            </input>
            <label htmlFor="username">who are you?</label>
        </div>
    </div>
  )
}
