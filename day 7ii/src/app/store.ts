import { configureStore } from "@reduxjs/toolkit";
import timer_reducer from '../features/timer/timeSlice'

export const store = configureStore({
    reducer:{
        timer: timer_reducer
    }
})
export type RootState = ReturnType<typeof store.getState>
