import React from 'react'
import {markerStyles} from './markerStyles'

class TweetMarker extends React.Component {

  render() {
    return (
      <div style={markerStyles}>
        {this.props.text}
      </div>
    )
  }


}

export default TweetMarker