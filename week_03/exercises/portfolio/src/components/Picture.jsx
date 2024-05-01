import React from 'react'

export default function Picture(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
    </div>
  )
}
