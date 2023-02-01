import React from 'react'

const Artist = (props) => {
  return (
    <div className="artist">
      <img src={props.image} className="photo" />
    </div>
  )
}

export default Artist
