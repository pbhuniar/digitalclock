import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";





const initialState = {
  status: "idle",
 time:window.localStorage.getItem("switch") ==='false'?false:true

};


export const TimerSlice = createSlice({
  name: "showroom",
  initialState,
  reducers:{
    clockstart: (state, action) => {


      state.time = action.payload;
      window?.localStorage?.setItem("switch",true)
    },
    clockoff: (state, action) => {
   
      state.time = action.payload;
      window?.localStorage?.setItem("switch",false)
    },
 
  }

});

export default TimerSlice.reducer;
export const { clockstart,clockoff } = TimerSlice.actions;
