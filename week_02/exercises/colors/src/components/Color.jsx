import React from 'react'

export default function Color({color}) {
  return (
    <div className="color" style={{ backgroundColor: color }}>
        <span>{color}</span></div>
  )
}
