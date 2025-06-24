import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "timer",
  initialState: {
    timer: "",
  },
  reducers: {
    showTime: (state) => {
      const now = new Date();
      state.timer = now.toLocaleTimeString();
    },
    resetTime: (state) => {
      state.timer = "";
    },
  },
});

export const { showTime, resetTime } = timeSlice.actions;

export default timeSlice.reducer;
