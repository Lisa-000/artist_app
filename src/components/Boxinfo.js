import React from 'react'

const Boxinfo = (props) => {
  return (
    <div className="name">
      <div className="city">
        <h1>{props.name}</h1>
        <p>
          <b>City:</b> {props.city}
        </p>
        <b>Website Links:</b>
        <p>{props.socials}</p>
        <p>{props.website}</p>
      </div>
    </div>
  )
}

export default Boxinfo
