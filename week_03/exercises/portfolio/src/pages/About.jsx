import React from 'react'
import { PageHeader, PageBody, Button, Navigation, Picture } from '../components'

export default function About() {
  return (
    <div>
      <PageHeader title="About" />
      <PageBody content="this is the about page"/>
      <Picture src="https://via.placeholder.com/150" alt="placeholder" />
      <Button label="contact us" url="/contact" />
    </div>
  )
}
