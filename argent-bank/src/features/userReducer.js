import { createReducer } from "@reduxjs/toolkit";
import {
  loadApiUser,
  loadApiUserError,
  loadApiUserSuccess,
} from "../actions/actionGetUser";
import { logOut } from "../actions/actionLogout";
import {
  loadApiEditUser,
  loadApiEditUserSuccess,
  loadApiEditUserError,
} from "../actions/actionEditUser";
// initial state
const initialStateUser = {
  isLoading: false,
  isLogged: false,
  user: {},
  error: "",
};

// reducer
export const userReducer = createReducer(initialStateUser, (builder) => {
  return builder
    .addCase(loadApiUser, (state) => {
      state.isLoading = true;
      return;
    })
    .addCase(loadApiUserSuccess, (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.user = action.payload;
      state.error = "";
      return;
    })
    .addCase(loadApiUserError, (state, action) => {
      state.isLoading = false;
      state.isLogged = false;
      state.user = {};
      state.error = action.payload;
      return;
    })
    .addCase(logOut, (state, action) => {
      state.isLoading = false;
      state.isLogged = false;
      state.user = {};
      state.error = action.payload;
      return;
    })
    .addCase(loadApiEditUser, (state) => {
      state.isLoading = true;
      return;
    })
    .addCase(loadApiEditUserSuccess, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = "";
      return;
    })
    .addCase(loadApiEditUserError, (state, action) => {
      state.isLoading = false;
      state.user = {};
      state.error = action.payload;
      return;
    });
});
