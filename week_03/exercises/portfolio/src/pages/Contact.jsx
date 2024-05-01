import React from 'react'
import { PageHeader, PageBody, Navigation, Picture, Button } from '../components'

export default function Contact() {
  return (
    <div>
      <PageHeader title="Contact" />
      <PageBody content="this is the contact page"/>
      <Picture src="https://via.placeholder.com/120" alt="placeholder" />
      <Button label="about us" url="/about" />
    </div>
  )
}
