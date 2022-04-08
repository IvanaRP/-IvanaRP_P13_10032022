import { createReducer } from "@reduxjs/toolkit";
// actions imports
import {
  loadApiToken,
  loadApiTokenError,
  loadApiTokenSuccess,
} from "../actions/actionGetToken";

// REDUCER

/**
 * Reducer for  Token
 *
 */

// initial state
const initialStateToken = {
  isLoading: false,
  token: "",
  tokenOk: "",
  error: "",
};
// reducer
export const tokenReducer = createReducer(initialStateToken, (builder) => {
  return builder
    .addCase(loadApiToken, (state) => {
      state.isLoading = true;
      state.token = "";
      state.tokenOk = "";
      state.error = "";
      return;
    })
    .addCase(loadApiTokenSuccess, (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
      state.tokenOk = true;
      state.error = "";
      return;
    })
    .addCase(loadApiTokenError, (state, action) => {
      state.isLoading = false;
      state.token = "";
      state.tokenOk = false;
      state.error = action.payload;
      return;
    });
});
