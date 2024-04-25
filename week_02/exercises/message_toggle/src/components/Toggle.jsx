import React, {useState} from 'react'

export default function Toggle() {
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    }
  return (
    <div>
        { isVisible && <h1>now you see me</h1> }
        <button onClick={toggleVisibility}>Toggle</button>
    </div>
  )
}
