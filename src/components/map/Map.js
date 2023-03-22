import React from 'react'
import GoogleMapReact from 'google-map-react';
import {mapStyles} from '../../mapStyles';
// import { fitBounds } from 'google-map-react';


function Map({coordinates, setCoordinates, setBounds, bounds, width, height}) {
  

  return (
    <div style={{ height: '100vh', width: '100%' }}>
     

    <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        gestureHandling = 'cooperative'
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          console.log(e)
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={(child) => setChildClicked(child)}
      >
      
      </GoogleMapReact>
    </div>
  )
}

export default Map