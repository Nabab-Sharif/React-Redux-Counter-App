import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({

  name: 'counter',

  initialState: {
    value: 0,
  },

  reducers: {

    increment: (state, actions) => {
      state.value = actions.payload;
    },
    decrement: (state, actions) => {
      state.value = actions.payload;
    },

  }
})


export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;