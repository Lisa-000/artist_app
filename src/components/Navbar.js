import React from 'react'

const Navbar = () => {
  return (
    <div className="nav-bar home">
      <div class="menu">
        <div class="hamburger"></div>

        <div class="hamburgertwo"></div>

        <div class="hamburgerthree"></div>
        <div className="nav-info">
          <a>HOME</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a>ARTIST</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a>CONTACT</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
