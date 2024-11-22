import { configureStore } from '@reduxjs/toolkit';
import { dishReducer } from '../store/slices/dishSlice';

export const store = configureStore({
  reducer: {
    dish: dishReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;