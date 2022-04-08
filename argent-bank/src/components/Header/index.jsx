import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import "../../style/header.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../actions/actionLogout";

/**
 * This function display the header of the website
 *  The different part of the header :
 * - the Argent bank logo
 * - the component to Logout or Login user
 */

export const logout = () => {
  localStorage.removeItem("token");
  return (dispatch) => {
    dispatch(logOut());
  };
};
function Header() {
  const dispatch = useDispatch();

  const selectLogin = (state) => state.getUser.isLogged;
  const login = useSelector(selectLogin);

  const selectUser = (state) => state.getUser.user;
  const user = useSelector(selectUser);
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
        {login ? (
          <div className="main-nav-user-logout">
            <div className="main-nav-user">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="sign-in-icon-nav"
              ></FontAwesomeIcon>
              <div className="main-nav-user-name">{user.body.firstName}</div>
            </div>
            <Link to="./profile" className="main-nav-item">
              <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
              <button
                className="main-nav-item"
                onClick={() => dispatch(logout())}
              >
                Sign out
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <Link className="main-nav-item-login" to="/login">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="sign-in-icon-nav"
              ></FontAwesomeIcon>
              <div className="sign-in-text">Sign In</div>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
