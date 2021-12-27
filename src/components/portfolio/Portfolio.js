import React from "react";
import banyan from "../../img/banyanlabs.png";
import diver from "../../img//scubaSite.png";

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import './portfolio.css';


const Pofrfolio = () => {

  // Banyan Labs
  const openPopupboxBanyan = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={banyan} alt="Banmyan Web Site..." />
        <p>My first project, after getting hired on at Banyan Labs, was to help the web teasm build the Banyan webste using React.</p>
        <b>Web:</b> <a className="hyper-link" onClick={() => window.open("https:/banyanlabs.io")}>https://banyanlabs.io</a>
      </div>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigBanyan = {
    titleBar: {
      enable: true,
      text: "Banyan Labs Website."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

//
  const openPopupboxScubaBlog = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={diver} alt="Django Scuba Blog project." />
        <p>Scuba diving website with login and registration verification using Django. It also has a blog section where scuba divers can blog about there best dive spots or deepest dives, etc.. Has profile section and if you click on person name it shows all of that persons blogs from newest to oldest.</p>
        
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/joseph-caldwell/Deep-Divers/tree/main/scuba_site", "_blank")}>https://github.com/joseph-caldwell/Deep-Divers/tree/main/scuba_site</a>
      </div>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigScubaBlog = {
    titleBar: {
      enable: true,
      text: "Django Scuba Blog project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }





  return (
    <div className="portfolio-wrapper">
        <div className="container">
          <h1 className="portfolio-heading text-center py-5">portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
              <div className="portfolio-image-box" onClick={openPopupboxBanyan}>
                <img className="portfolio-image" src={banyan} alt="Banyan Labs Web Site..." />
            //   <div className="overflow"></div>
            // <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxScubaBlog}>
            <img className="portfolio-image" src={diver} alt="City Guide Project..." />
            // <div className="overflow"></div>
            // <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          
          <div className="portfolio-image-box" onClick={openPopupboxBanyan}>
            <img className="portfolio-image" src={banyan} alt="Banyan Labs Web Site..." />
            // <div className="overflow"></div>
            // <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxScubaBlog}>
            <img className="portfolio-image" src={diver} alt="City Guide Project..." />
            // <div className="overflow"></div>
            // <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
   
      </div>
      <PopupboxContainer {...popupboxConfigBanyan} />
      <PopupboxContainer {...popupboxConfigScubaBlog} />
      <PopupboxContainer {...popupboxConfigBanyan} />
      <PopupboxContainer {...popupboxConfigScubaBlog} />
    </div>
     </div>
  )
}

export default Pofrfolio;
