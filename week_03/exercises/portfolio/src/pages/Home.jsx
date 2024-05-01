import React from 'react'
import { PageHeader, PageBody, Navigation, Picture, Button } from '../components'

export default function Home() {
  return (
    <div>
      <PageHeader title="Home" />
      <PageBody content="this is the home page"/>
      <Picture src="https://via.placeholder.com/100" alt="placeholder" />
      <Button label="about us" url="/about" />
    </div>
  )
}
