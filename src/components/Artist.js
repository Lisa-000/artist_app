import React from 'react'

const Artist = (props) => {
  return (
    <div className="artist">
      <img src={props.image} className="poster" />
      <center>
        <h3>{props.name}</h3>

        <p>{props.location}</p>
      </center>
    </div>
  )
}

export default Artist
