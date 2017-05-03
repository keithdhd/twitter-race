import React from 'react'

const RacerForm = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    props.startRace(["may", "trump"])
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Start the race >></button>
    </form>
  )

}

export default RacerForm