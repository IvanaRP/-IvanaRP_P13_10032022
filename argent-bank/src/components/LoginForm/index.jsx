import React from "react";
import "../../style/signin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { userLogin } from "../../features/loginSlice";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (e) => {
    alert("FORM SUBMITED");
    // e.preventDefault();
  };

  return (
    <div className="main bg-dark">
      <div className="sign-in-wrapper">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="subit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default LoginForm;
