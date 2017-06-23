import React from 'react'

class TweetMarker extends React.Component {

  render() {
    return (
      <div style={this.props.markerStyles}>
        {this.props.text}
      </div>
    )
  }


}

export default TweetMarker