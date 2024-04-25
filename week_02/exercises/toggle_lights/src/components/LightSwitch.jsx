import React, { useState } from 'react'

export default function LightSwitch() {
    const [isColor, setIsColor] = useState('black');
    const toggleColor = () => {
        setIsColor(prev => prev === 'black' ? 'white' : 'black');
    }
  return (
    <div style={{ backgroundColor: isColor }}>
        <h1>LIGHT</h1>
        <button onClick={toggleColor}>PUSH</button>
    </div>
  )
}