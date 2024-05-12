import React, { useState, useEffect } from 'react'
import ParkingGarage from './ParkingGarage';

export default function ParkingGaragesRealtime() {
    const [parkingGarages, setParkingGarages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setParkingGarages([]);

        const url = "https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&facet=description";
        const options = {
            method: "GET",
        };
        fetch(url, options)
        .then (response => response.json())
        .then ((data) => {
            // console.log(data);
            setParkingGarages(data.records);
            setIsLoading(false);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            setIsLoading(false);
        });
    }, []);
  return (
    <div>

        <h1>Parking Garages Realtime</h1>
        {isLoading && <p>Loading...</p>}
        {!isLoading && 
            <ul>
                {parkingGarages.map((parkingGarage, i) => (
                    <ParkingGarage key={`parking-${i}`} parkingGarage={parkingGarage}/>
            ))}
            </ul>
        }
    </div>
  )
}
