import React from 'react'
import io from 'socket.io-client'
import RacerCharts from '../components/RacerCharts'
import RacerForm from '../components/RacerForm'
import TweetList from '../components/TweetList'

class RaceContainer extends React.Component {

  constructor(props) {
    super(props)
    this.socket = io()
    this.state ={
      racerCounts: {} 
    }
  }


  startRace(racers){
    this.socket.emit('racers', racers)
    const racerCounts = {}

    racers.forEach( (racer) => {
      racerCounts[racer] = []
    }) 

    this.setState({ racerCounts: racerCounts });

    this.socket.on('racers', (racer) => {

      const newRacerCounts = this.state.racerCounts
      newRacerCounts[racer.racer].push(racer.tweet)

      this.setState((prevState) => ({
        racerCounts: newRacerCounts
      }));

      if(newRacerCounts[racer.racer].length === 20){
        this.socket.emit('stop')
        this.socket.close()
      }

    })
  }

  render() {
    console.log(this.state.racerCounts)
    if (this.state.racerCounts['may']) {
      return (
        <div>
          <RacerForm startRace={this.startRace.bind(this)}/>
          <RacerCharts racerCounts={this.state.racerCounts}/>
          <TweetList tweets={this.state.racerCounts['may']}/>
        </div>
      )
    } else {
      return (
        <div>
          <RacerForm startRace={this.startRace.bind(this)}/>
          <RacerCharts racerCounts={this.state.racerCounts}/>
        </div>
      )
    }
  }
}


export default RaceContainer