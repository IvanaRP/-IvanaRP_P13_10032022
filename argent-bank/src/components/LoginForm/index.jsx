import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "../../style/signin.css";

function LoginForm() {
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
                name="email"
                placeholder="username"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div>{invalidFields}</div>

            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default LoginForm;
