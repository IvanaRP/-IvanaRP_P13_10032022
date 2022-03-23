import axios from "axios";

import {
  loadApiToken,
  loadApiTokenError,
  loadApiTokenSuccess,
} from "../actions/actionGetToken";

// user
import {
  loadApiUser,
  loadApiUserError,
  loadApiUserSuccess,
} from "../actions/actionGetUser";

// CONSTANTS // __________________________________________________________________

const baseURL = "http://localhost:3001/api/v1/user/";

// API CALLS // __________________________________________________________________

/**
 * to get user token with POST method in API Call
 * @function
 * @name getToken
 * @param {string} email
 * @param {string} password
 * @returns {object}
 */
export const getToken = (email, password) => {
  return (dispatch) => {
    dispatch(loadApiToken());
    axios
      .post(baseURL + "login", {
        email,
        password,
      })
      .then((response) => {
        dispatch(loadApiTokenSuccess(response.data.body.token));
        localStorage.setItem("token", response.data.body.token);
        const token = localStorage.getItem("token");
        console.log(token);
        dispatch(getUser(token));
      })
      .catch((error) => {
        dispatch(loadApiTokenError(error.message));
      });
  };
};
// user
export const getUser = (token) => {
  return (dispatch) => {
    dispatch(loadApiUser());
    axios({
      method: "POST",
      url: baseURL + "profile",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch(loadApiUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loadApiUserError(error.message));
      });
  };
};
