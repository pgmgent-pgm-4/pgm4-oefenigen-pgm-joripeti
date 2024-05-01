import React from 'react'
import { PageHeader, PageBody, Navigation, Picture, Button } from '../components'

export default function Resume() {
  return (
    <div>
      <PageHeader title="Resume" />
      <PageBody content="this is the resume page"/>
      <Picture src="https://via.placeholder.com/10" alt="placeholder" />
      <Button label="contact us" url="/contact" />
    </div>
  )
}
