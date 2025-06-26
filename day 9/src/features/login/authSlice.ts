import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    logIn: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logOut: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
