import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDish } from '../../types';
import { addNewDish, deleteDishById, fetchingAllDishes } from '../thunks/dishThunks';
import { RootState } from '../../app/store';

interface DishState {
  dishes: IDish[];
  loading: {
    isAdding: boolean,
    isFetching: boolean,
    isDeleting: boolean,
  }
}

const initialState: DishState = {
  dishes: [],
  loading: {
    isAdding: false,
    isFetching: false,
    isDeleting: false,
  }
};

export const selectAddDishLoading = (state: RootState) => state.dish.loading.isAdding;
export const selectFetchingDishesLoading = (state: RootState) => state.dish.loading.isAdding;
export const selectAllDishes = (state: RootState) => state.dish.dishes;
export const selectDeleteDishLoading = (state: RootState) => state.dish.loading.isDeleting;

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
      })
      .addCase(deleteDishById.pending, (state) => {
        state.loading.isAdding = true;
      })
      .addCase(deleteDishById.fulfilled, (state) => {
        state.loading.isAdding = false;
      })
      .addCase(deleteDishById.rejected, (state) => {
        state.loading.isAdding = false;
      });
  }
});

export const dishReducer = dishSlice.reducer;
export const {} = dishSlice.actions;