import React from 'react'
import GoogleMapReact from 'google-map-react';
import TweetMarker from './TweetMarker';

class RacerMap extends React.Component {

  render() {
    return (
      <div id='map'>
        <GoogleMapReact
          center={{lat: 59.95, lng: 30.33}}
          defaultZoom={0}>
          <TweetMarker lat={59.955413} lng={30.337844} text={'TWEET'} />
        </GoogleMapReact>
      </div>
    )
  }


}

export default RacerMap