import React from 'react'
import GoogleMapReact from 'google-map-react';

class RacerMap extends React.Component {

  render() {
    return (
      <div id='map'>
        <GoogleMapReact
          center={{lat: 59.95, lng: 30.33}}
          defaultZoom={9}>
        </GoogleMapReact>
      </div>
    )
  }


}

export default RacerMap