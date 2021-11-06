import React from "react";

import Typed from "react-typed";
import './header.css'

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <canvas className="tsparticles-canvas-el"></canvas>
        <h1>web development and Mobile App Development</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "Mobile App Design", "Android Mobile App Development", "Figma or Adobe XD","React & React-Native"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">contact me</a>
      </div>
    </div>
  )
}

export default Header;