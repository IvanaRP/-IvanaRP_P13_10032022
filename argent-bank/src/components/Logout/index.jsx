import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/login";

/**
 * Logout component to display user's profile page
 * User name
 * Button for logout
 *
 */

function Logout() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    // e.preventDefaul();
    dispatch(logout());
  };

  return (
    <div className="main bg-dark">
      <h1>
        Welcome <span>{user.name}</span>
      </h1>
      <button onClick={(e) => handleLogout(e)}> logout</button>
    </div>
  );
}

export default Logout;
