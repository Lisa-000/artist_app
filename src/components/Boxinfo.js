import React from 'react'

const Boxinfo = (props) => {
  return (
    <center>
      <div className="name">
        <h3>{props.name}</h3>
        <div className="city">
          <p>{props.city}</p>
          <p>{props.socials}</p>
          <p>{props.website}</p>
        </div>
      </div>
    </center>
  )
}

export default Boxinfo
