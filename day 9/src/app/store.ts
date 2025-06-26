import { configureStore } from "@reduxjs/toolkit";
import auth_reducer from "../features/login/authSlice"
import user_reducer from "../features/users/userInfoSlice"
export const store = configureStore({
  reducer: {
    auth: auth_reducer,
    user: user_reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

