import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import mylogo from '../../img/emojilogo2.png'
import './navbar.css'
import Joey from '../../img/mydescript.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">

        <a className="navbar-brand ml-4 " href="#"><img className="logo .d-sm-none .d-md-block" src={mylogo} alt="logo..." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse navbarList" id="navbarSupportedContent">
          <ul className="navbar-nav navbarList">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contacts</a>
            </li>

          </ul>
          <a href="#Aboutme"><img className="myImage" src={ Joey } alt="..." /></a>
     
        </div>

      </div>
    </nav>
  )
}

export default Navbar;