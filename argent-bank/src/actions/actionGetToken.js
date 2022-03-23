// IMPORTS // ______________________________________________________________

import { createAction } from "@reduxjs/toolkit";

// ACTIONS // ______________________________________________________________

/**
 * Redux actions get token
 * @reduxAction
 */

export const loadApiToken = createAction("load-token");

export const loadApiTokenSuccess = createAction(
  "get-token-success",
  (token) => {
    return {
      payload: { token },
    };
  }
);

export const loadApiTokenError = createAction("get-token-error", (error) => {
  return {
    payload: { error },
  };
});
