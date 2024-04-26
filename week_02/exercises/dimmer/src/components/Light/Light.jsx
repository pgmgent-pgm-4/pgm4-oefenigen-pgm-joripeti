import React from 'react'
import './light.css'

export default function Light({dimPercentage}) {
  return (
    // tweede { is een object ; we delen a door 100 omdat hsla van 0 - 1 gaat, terwijl onze dimmer van 0 - 100 gaat ; backticks (object literals) gebruiken om expressie te kunnen schrijven
    <div className='light' style={{ backgroundColor : `hsla(48, 89%, 50%, ${dimPercentage / 100})` }}></div>
  )
}
