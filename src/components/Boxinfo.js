import React from 'react'

const Boxinfo = (props) => {
  return (
    <center>
      <h3>{props.name}</h3>
      <p>{props.city}</p>
      <p>{props.socials}</p>
      <p>{props.website}</p>
    </center>
  )
}

export default Boxinfo
