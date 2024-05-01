import React from 'react'

import { NavLink } from 'react-router-dom'
import { ROUTES } from '../routes/routes'

export default function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.home.path}>
              {ROUTES.home.title}
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.about.path}>
              {ROUTES.about.title}
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.contact.path}>
              {ROUTES.contact.title}
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.projects.path}>
              {ROUTES.projects.title}
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.resume.path}>
              {ROUTES.resume.title}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

