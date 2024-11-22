import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDish } from '../../types';
import { addNewDish, fetchingAllDishes } from '../thunks/dishThunks';
import { RootState } from '../../app/store';

interface DishState {
  dishes: IDish[];
  loading: {
    isAdding: boolean,
    isFetching: boolean,
  }
}

const initialState: DishState = {
  dishes: [],
  loading: {
    isAdding: false,
    isFetching: false,
  }
};

export const selectAddDishLoading = (state: RootState) => state.dish.loading.isAdding;
export const selectFetchingDishesLoading = (state: RootState) => state.dish.loading.isAdding;
export const selectAllDishes = (state: RootState) => state.dish.dishes;

export const dishSlice = createSlice({
  name: 'dish',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewDish.pending, (state) => {
        state.loading.isAdding = true;
      })
      .addCase(addNewDish.fulfilled, (state) => {
        state.loading.isAdding = false;
      })
      .addCase(addNewDish.rejected, (state) => {
        state.loading.isAdding = false;
      })
      .addCase(fetchingAllDishes.pending, (state) => {
        state.loading.isAdding = true;
      })
      .addCase(fetchingAllDishes.fulfilled, (state, action: PayloadAction<IDish[]>) => {
        state.loading.isAdding = false;
        state.dishes = action.payload;
      })
      .addCase(fetchingAllDishes.rejected, (state) => {
        state.loading.isAdding = false;
      });
  }
});

export const dishReducer = dishSlice.reducer;
export const {} = dishSlice.actions;