// IMPORTS
import { createAction } from "@reduxjs/toolkit";

// ACTIONS

/**
 * Redux actions to get Token
 *
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
