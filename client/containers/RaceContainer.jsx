import React from 'react'
import io from 'socket.io-client'

class RaceContainer extends React.Component {

  constructor(props) {
    super(props)
    this.socket = io()
  }

  render() {
    return (
      <div>
        <p>form here</p>
        <p>graphs here</p>
      </div>
    )
  }
}

export default RaceContainer