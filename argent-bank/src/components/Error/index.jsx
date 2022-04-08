import React from "react";
import { Link } from "react-router-dom";
import "../../style/error.css";

/**
 * This component function display a 404 error message
 * An 404 error, with a text error and a go back link
 */

function Error() {
  return (
    <div className="errorWrapper">
      <div className="errorContainer">
        <div className="errorUser">
          <h1 className="error404">404</h1>
          <h2 className="error-message">
            Oups! La page que vous demandez n'existe pas.
          </h2>
          <Link to="/" className="home-link">
            Retourner sur la page d’accueil!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
