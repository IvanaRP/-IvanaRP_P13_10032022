import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

// API calls
import { getToken } from "../../getApi/getApi";

import "../../style/signin.css";

/**
 * Login Form component to Login user to user's profile page
 * Input email
 * Input password
 * Sign in button
 */

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidFields, setInvalidFields] = useState("");

  const dispatch = useDispatch();

  const message = useSelector((state) => state.getUser.user.status);

  const tokenOk = useSelector((state) => state.token.tokenOk);
  // console.log(tokenOk);
  const handleSubmit = (e) => {
    e.preventDefault();
    setInvalidFields("");
    if (email === "" || password === "") {
      return setInvalidFields("Please fill fields correctly");
    } else {
      dispatch(getToken(email, password));
      // console.log("loged");
    }
  };
  if (message === 200) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="main bg-dark">
      <div className="sign-in-wrapper">
        <section className="sign-in-content">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="sign-in-icon"
          ></FontAwesomeIcon>
          <div className="sign-in-text">Sign In</div>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="input-invalid">{invalidFields}</div>
            {tokenOk === false && (
              <div className="input-invalid">Email or password invalid</div>
            )}
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
