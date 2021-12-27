import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faFigma } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import './services.css';
<i class="fab fa-android"></i>
const Services = () => {
  return (
    <div className="services">
      <h1 className="titleServices py-5 ">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>Web Design & Facebook Ad design</h3>
              <p>I approach each project individually and always focus on the results that the client is expecting.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>Web Development</h3>
              <p>Your website will be build with an new proven technologies such as CSS, HTML5, Bootstrap,Gatsby, React, etc...</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faAndroid} size="2x" /></div>

              <h3>Android/IOS Mobile Apps</h3>
              <p>Build responsive mobile apps with React-Native for Android and IOS.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
              <FontAwesomeIcon className="icon" icon={faFigma} size="2x" />
              </div>
              
              <h3>Figma/Adobe XD</h3>
              <p>Build a fully functional mock project with Figma or Adobe XD so client can demo there app idea.</p>.
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;