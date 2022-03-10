import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";
import "../../style/header.css";

/**
 * This function display the header of the website
 * @returns The different part of the header : 
 * - the SportSee logo
 * - the component Navigation for displaying the different navigation's link
 */

function Header() {
  return (
    <div className="headContainer">
      <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={HeaderLogo}
          alt="Argent Bank Logo"
        />
        </Link>
      <div>
        <Link className="main-nav-item" to="/sign-in">
         <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
          Sign In
        </Link>
      </div>
    </nav>
    </div>
  );
}

export default Header;