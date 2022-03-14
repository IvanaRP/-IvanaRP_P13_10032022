import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";

import "../../style/signin.css";


function Login() {
  return (
    <div className="main bg-dark">
   <div className="sign-in-wrapper">
      <section className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label
            ><input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me"
              >Remember me</label
            >
          </div>
          <button type="button" className="sign-in-button" >Sign In</button>
        
        </form>
      </section>
      </div>
    </div>
  );
}

export default Login;