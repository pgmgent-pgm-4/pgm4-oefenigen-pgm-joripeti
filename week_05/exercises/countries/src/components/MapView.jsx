import React from 'react';
import Map from 'react-map-gl';
import MapMarker from './MapMarker';
import { countries } from '../data/countries';

export default function MapView() {
  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      initialViewState={{
        longitude: 3.686510,
        latitude: 51.076130,
        zoom: 5,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
        {countries.map((country) => (
            <MapMarker
                key={country.id}
                longitude={country.longitude}
                latitude={country.latitude}
                code={country.iso2Code}
            />
        ))}
    </Map>
  );
}
