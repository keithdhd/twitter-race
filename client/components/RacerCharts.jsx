import React from 'react'

const RacerChart = (props) => {

  var may = props.racerCounts['may'] || 0;
  var trump = props.racerCounts['trump'] || 0;

  return (
    <div>
      <figure>
        <img
        src="http://1x1px.me/FF4D00-0.8.png"
        alt=""
        width={ may.length * 7 } /> 
        <figcaption>May: { may.length }</figcaption>
      </figure>

      <figure>
        <img
        src="http://1x1px.me/FF4D00-0.8.png"
        alt=""
        width={ trump.length * 7 } /> 
        <figcaption>Trump: { trump.length }</figcaption>
      </figure>
    </div>
  )

}

export default RacerChart