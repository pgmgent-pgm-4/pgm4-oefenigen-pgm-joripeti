import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({label, url}) {
  return (
    <Link to={url} className="button">
      {label}
    </Link>
  );
}
