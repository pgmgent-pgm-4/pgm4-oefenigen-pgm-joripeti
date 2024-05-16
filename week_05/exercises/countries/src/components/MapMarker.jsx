import React, { useEffect, useState } from 'react';
import { Marker } from 'react-map-gl';
import { countryFlags } from '../data/country-flags'; 

export default function MapMarker({ longitude, latitude, code }) {
    const [currentFlagUrl, setCurrentFlagUrl] = useState('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F015%2F634%2F835%2Foriginal%2Frastafarian-flag-with-the-lion-of-judah-reggae-background-vector.jpg&f=1&nofb=1&ipt=0b0586a3d1d2093583e981cbee119d493aa37a925e47f45e7556a0c787f47caf&ipo=images');

    useEffect(() => {
        const currentCountryFlag = countryFlags.filter((flag) => {
            return flag.code?.toLowerCase() === code.toLowerCase();
        });
        if (currentCountryFlag.length > 0) {
            setCurrentFlagUrl(currentCountryFlag[0].flag);
        }
    }, [code]);

  return (
    <Marker longitude={longitude} latitude={latitude} anchor='bottom'>
        <img 
            style={{ width: "100px" }}
            src={currentFlagUrl}
            alt={'rasta flag'}
        />
    </Marker>
  )
}
