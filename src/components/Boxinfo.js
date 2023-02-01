import React from 'react'

const Boxinfo = (props) => {
  return (
    <center>
      <div className="name">
        <h3>{props.name}</h3>
      </div>
      <div className="city">
        <p>{props.city}</p>
      </div>
      <div className="socials">
        <p>{props.socials}</p>
        <p>{props.website}</p>
      </div>
    </center>
  )
}

export default Boxinfo
