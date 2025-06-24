import { configureStore } from "@reduxjs/toolkit";
import counter_reducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counter_reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
