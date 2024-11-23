import { configureStore } from '@reduxjs/toolkit';
import { dishReducer } from '../store/slices/dishSlice';
import { cartReducer } from '../store/slices/cartSlice';

export const store = configureStore({
  reducer: {
    dish: dishReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;