import React from "react";
import { useSelector } from "react-redux";

import LoginForm from "../../components/LoginForm";

import "../../style/signin.css";

function Login() {
  // const user = useSelector(selectUser);

  return (
    <div className="main bg-dark">
      <LoginForm />
      {/* {user ? <Logout/> : <LoginForm/>} */}
    </div>
  );
}

export default Login;
