import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    incrementCounter: (state)=>{
        state.counter += 1
    },
    decrementounter: (state)=>{
        if(state.counter > 0)
        state.counter -= 1
    },
  },
});

export const {incrementCounter, decrementounter} = counterSlice.actions

export default counterSlice.reducer;
