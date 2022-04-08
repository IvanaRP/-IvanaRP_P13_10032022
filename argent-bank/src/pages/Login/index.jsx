import React from "react";

import LoginForm from "../../components/LoginForm";

import "../../style/signin.css";

/**
 * This Function display a Login page
 * A Login Form component
 */

function Login() {
  return (
    <div className="main bg-dark">
      <LoginForm />
    </div>
  );
}

export default Login;
