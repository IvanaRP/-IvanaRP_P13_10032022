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

import {
  loadApiEditUser,
  loadApiEditUserError,
  loadApiEditUserSuccess,
} from "../actions/actionEditUser";

const baseURL = "http://localhost:3001/api/v1/user/";

// API CALLS

/**
 * Function to get user token
 *
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

/**
 * Function to get user info
 */

// user
export const getUser = (token, firstName, lastName) => {
  return (dispatch) => {
    dispatch(loadApiUser());
    axios({
      method: "POST",
      url: baseURL + "profile",
      headers: { Authorization: `Bearer ${token}` },
      data: {
        firstName,
        lastName,
      },
    })
      .then((response) => {
        dispatch(loadApiUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loadApiUserError(error.message));
      });
  };
};

/**
 * Function to edit user info
 */

// edit user
export const editUser = (firstName, lastName) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(loadApiEditUser());
    axios({
      method: "PUT",
      url: baseURL + "profile",
      headers: { Authorization: `Bearer ${token}` },
      data: {
        firstName,
        lastName,
      },
    })
      .then((response) => {
        dispatch(loadApiEditUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loadApiEditUserError(error.message));
      });
  };
};
