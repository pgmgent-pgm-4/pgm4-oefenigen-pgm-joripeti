import React from 'react'

export default function ParkingGarage({parkingGarage}) {
    console.log(parkingGarage);
    const capacityClass = parkingGarage.fields.availablecapacity <100 ? 'low-capacity' : 'high-capacity';
  return (
    <li className="garage-item">
        <div className='info'>
            <p>{parkingGarage.fields.name}</p>
            <p> (max. {parkingGarage.fields.availablecapacity})</p>
            <p> • {parkingGarage.fields.operatorinformation}</p>
        </div>
        <p className={capacityClass}>{parkingGarage.fields.availablecapacity}</p>
    </li>
  )
}
