import { createReducer } from "@reduxjs/toolkit";
// actions imports
import {
  loadApiToken,
  loadApiTokenError,
  loadApiTokenSuccess,
} from "../actions/actionGetToken";

// REDUCER
// initial state
const initialStateToken = {
  isLoading: false,
  token: "",
  tokenExist: "",
  error: "",
};
// reducer
export const tokenReducer = createReducer(initialStateToken, (builder) => {
  return builder
    .addCase(loadApiToken, (state) => {
      state.isLoading = true;
      state.token = "";
      state.tokenExist = "";
      state.error = "";
      return;
    })
    .addCase(loadApiTokenSuccess, (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
      state.tokenExist = true;
      state.error = "";
      return;
    })
    .addCase(loadApiTokenError, (state, action) => {
      state.isLoading = false;
      state.token = "";
      state.tokenExist = false;
      state.error = action.payload;
      return;
    });
});
