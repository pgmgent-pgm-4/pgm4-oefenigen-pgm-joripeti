import React from 'react'
import { Button, Navigation, PageBody, PageHeader, Picture } from '../components'
import data from '../data/projects.json'

import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/routes'

export default function Projects() {
  return (
    <div>
      <PageHeader title="Projects" />
      <PageBody content="this is the projects page"/>
      <Picture src="https://via.placeholder.com/20" alt="placeholder" />
      <Button label="about us" url="/about" />
      <div>
        {data.projects && data.projects.map((project, id) => (
          <>
            <Link to ={`${ROUTES.projects.path}/${project.id}`}>
              <h1 key={`project-${id}`}>{project.name}</h1>
            </Link>
            <p key={`project-${id}`}>{project.description}</p>
          </>

        ))}
        </div>
    </div>
  )
}
