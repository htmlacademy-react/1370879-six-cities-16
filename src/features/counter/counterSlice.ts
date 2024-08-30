import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decreamented: (state) => {
      state.value -= 1;
    }
  }
});

export const { incremented, decreamented } = counterSlice.actions;

export default counterSlice.reducer;
