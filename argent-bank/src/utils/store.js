import { configureStore } from "@reduxjs/toolkit";
import { tokenReducer } from "../features/tokenReducer";
import { userReducer } from "../features/userReducer";
export const store = configureStore({
  reducer: {
    token: tokenReducer,
    getUser: userReducer,
  },
});
