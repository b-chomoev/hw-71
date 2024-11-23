import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DishCart, IDish } from '../../types';
import { RootState } from '../../app/store';

interface CartState {
  cartDishes: DishCart[];
}

const initialState: CartState = {
  cartDishes: [],
};

export const selectCartDishes = (state: RootState) => state.cart.cartDishes;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDish: (state, action: PayloadAction<IDish>) => {
      const dish =action.payload;

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
  }
});

export const cartReducer = cartSlice.reducer;
export const {addDish} = cartSlice.actions;