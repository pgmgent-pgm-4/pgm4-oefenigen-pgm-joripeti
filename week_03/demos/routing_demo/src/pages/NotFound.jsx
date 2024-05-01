import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function NotFound() {
    const error = useRouteError();
    console.log(error);
  return (
    <>
        <h1>bummer </h1>
        <p>• {error.status} • {error.statusText} •</p>
    </>
  )
}
