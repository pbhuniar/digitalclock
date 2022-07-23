import { configureStore } from "@reduxjs/toolkit";
import TimerSlice from "./TimerSlice";

export const store = configureStore({
  reducer: {
    TimerSlice: TimerSlice,
   
  },
});
