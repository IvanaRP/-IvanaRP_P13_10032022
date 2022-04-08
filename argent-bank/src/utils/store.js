import { configureStore } from "@reduxjs/toolkit";
import { tokenReducer } from "../features/tokenReducer";
import { userReducer } from "../features/userReducer";

/**
 * Configure store with reducers
 */

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    getUser: userReducer,
  },
});
