import React, {useState} from 'react'

export default function Toggle({ message }) {
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => {
        // setIsVisible((prev) => !prev);
        setIsVisible(!isVisible);
    }
  return (
    <div>
        <button onClick={toggleVisibility}>Toggle</button>
        { isVisible && <h1>{ message }</h1> }
    </div>
  )
}
