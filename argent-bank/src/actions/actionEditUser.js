import { createAction } from "@reduxjs/toolkit";

/**
 * Redux actions to edit user's name
 *
 */

export const loadApiEditUser = createAction("load-edit-user");

export const loadApiEditUserSuccess = createAction(
  "edit-user-success",
  (user) => {
    return {
      payload: user,
    };
  }
);

export const loadApiEditUserError = createAction("edit-user-error", (error) => {
  return {
    payload: error,
  };
});
