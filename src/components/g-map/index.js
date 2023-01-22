import React from "react";
import GoogleMapReact from 'google-map-react';

const MarkerComponent = ({ text }) => <div>{text}</div>;

export default function GMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MarkerComponent
          lat={59.955413}
          lng={30.337844}
          text="Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

