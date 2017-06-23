import React from 'react';
import GoogleMapReact from 'google-map-react';
import TweetMarker from './TweetMarker';
import {markerStyles} from '../components/markerStyles';

class RacerMap extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mapMarkers: []
    }
  }

  componentWillReceiveProps(nextProps) {
    const mapMarkers = []
    nextProps.tweets.forEach((tweet, index) => {
      var mapMarker = <TweetMarker lat={index} lng={30.337844} markerStyles={markerStyles} key={index}/>
      mapMarkers.push(mapMarker)
    })
    this.setState({mapMarkers}) 
  }

  render() {
      console.log(this.state.mapMarkers)
      return (
        <div id='map'>
          <GoogleMapReact
            center={{lat: 59.95, lng: 30.33}}
            defaultZoom={0}>
            {this.state.mapMarkers}
            <TweetMarker lat={50} lng={30.337844} markerStyles={markerStyles}/>
          </GoogleMapReact>
        </div>
      )
  }



}

export default RacerMap