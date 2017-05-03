import React from 'react'

const RacerChart = (props) => {

  return (
    <div>
      <figure>
        <img
        src="http://1x1px.me/FF4D00-0.8.png"
        alt=""
        width={ props.racerCounts['may'] * 7 } /> 
        <figcaption>May: {props.racerCounts['may']}</figcaption>
      </figure>

      <figure>
        <img
        src="http://1x1px.me/FF4D00-0.8.png"
        alt=""
        width={ props.racerCounts['trump'] * 7 } /> 
        <figcaption>Trump: {props.racerCounts['trump']}</figcaption>
      </figure>
    </div>
  )

}

export default RacerChart