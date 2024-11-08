import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rentalReducer from '../features/rental/rentalSlice';

export const store = configureStore({
  reducer: {
    rental: rentalReducer,
    counter: counterReducer
  }
});

console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
