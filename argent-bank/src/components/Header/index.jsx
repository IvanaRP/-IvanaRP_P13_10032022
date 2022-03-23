import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "../../style/header.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../actions/actionLogout";
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
          <div>
            <Link to="./profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {user.body.firstName}
            </Link>
            <button
              className="main-nav-item"
              onClick={() => dispatch(logout())}
            >
              <i className="fas fa-sign-out-alt"></i>
              Log out
            </button>
          </div>
        ) : (
          <div>
            <Link className="main-nav-item" to="/login">
              <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
