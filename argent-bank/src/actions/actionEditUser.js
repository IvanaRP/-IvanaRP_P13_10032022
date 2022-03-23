import { createAction } from "@reduxjs/toolkit";

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
