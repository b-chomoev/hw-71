import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DishCart, IDish } from '../../types';
import { RootState } from '../../app/store';
import { orderPizza } from '../thunks/cartThunks';

interface CartState {
  cartDishes: DishCart[];
  loading: {
    isOrdering: boolean,
  }
}

const initialState: CartState = {
  cartDishes: [],
  loading: {
    isOrdering: false,
  }
};

export const selectCartDishes = (state: RootState) => state.cart.cartDishes;
export const selectCartOrder = (state: RootState) => state.cart.loading.isOrdering;
export const selectOrder = (state: RootState) => state.cart.cartDishes;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDish: (state, action: PayloadAction<IDish>) => {
      const dish = action.payload;

      const indexDish = state.cartDishes.findIndex(dishCart => dishCart.dish.id === dish.id);

      if (indexDish === -1) {
        state.cartDishes = [...state.cartDishes, {dish, amount: 1}];
      } else {
        const cartCopy = [...state.cartDishes];
        const copyDishCart = {...cartCopy[indexDish]};
        copyDishCart.amount++;
        cartCopy[indexDish] = copyDishCart;

        state.cartDishes = [...cartCopy];
      }
    },
    deleteDish: (state, action: PayloadAction<string>) => {
      state.cartDishes = state.cartDishes.filter(oneDish => oneDish.dish.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartDishes = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderPizza.pending, (state) => {
        state.loading.isOrdering = true;
      })
      .addCase(orderPizza.fulfilled, (state) => {
        state.loading.isOrdering = false;
      })
      .addCase(orderPizza.rejected, (state) => {
        state.loading.isOrdering = false;
      });
}
});

export const cartReducer = cartSlice.reducer;
export const {addDish, deleteDish, clearCart} = cartSlice.actions;