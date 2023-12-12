import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({

  name: "counter", //state slice name 

  initialState: { //state slice initial value 
    value: 0
  },

  reducers: { //state slice initial value for increment and decrement used reducers property

    increment: (state) => {
      state.value = state.value + 1
    },
    decrement: (state) => {
      state.value = state.value - 1
    }
  }
})


export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;