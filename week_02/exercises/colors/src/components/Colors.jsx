import React, { useState } from 'react'
import Color from './Color';

export default function Colors({ color }) {
    const [colorList, setColorList] = useState([
        ('rgb(255, 0, 0)'), 
        ('rgb(0, 255, 0)'), 
        ('rgb(0, 0, 255)'), 
        ('rgb(255, 255, 0)'), 
        ('rgb(0, 255, 255)'), 
        ('rgb(255, 0, 255)')
    ]);
    const generateRandomColor = () => {
        return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    };
    const addColor = () => {
        setColorList([...colorList, generateRandomColor()]);
        // alternative way to add color
        // const newColor = generateRandomColor();
        // setColorList((prev)=> [...prev, newColor]);
    }
  return (
    <div>
        {colorList.map((color) => (
            <Color color={color} />
        ))}
        <button onClick={addColor}>add color</button>
    </div>
  )
}
