import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const options = {
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state) => ({ value: state.value + 1 }),
  },
};

const counterSlice = createSlice(options);

export const { incrementCounter } = counterSlice.actions;
export default counterSlice.reducer;
