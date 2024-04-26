import React, { useState } from 'react'
import Light from './Light'
import Dimmer from './Dimmer'

export default function DimmedLight() {
  const [dimPercentage, setDimPercentage] = useState(0);
  return (
    <div>
      <Light dimPercentage={dimPercentage} />
      <Dimmer 
        dimPercentage={dimPercentage}
        setDimPercentage={setDimPercentage} />
    </div>
  )
}
