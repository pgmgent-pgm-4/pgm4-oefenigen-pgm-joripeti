import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div>Welcome to our student search app</div>
    <NavLink to="/students">Go to Students</NavLink>
    </>
  )
}
