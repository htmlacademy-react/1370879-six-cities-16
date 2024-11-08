import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rentalReducer from '../features/rental/rentalSlice';

export const store = configureStore({
  reducer: {
    rental: rentalReducer,
    counter: counterReducer
  }
});

// console.log(store.getState());
// console.log(store.dispatch);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('state', JSON.stringify(state));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
