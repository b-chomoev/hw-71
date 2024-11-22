import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDish } from '../../types';
import { addNewDish, deleteDishById, editDish, fetchingAllDishes, getOneDishById } from '../thunks/dishThunks';
import { RootState } from '../../app/store';

interface DishState {
  dishes: IDish[];
  oneDish: IDish | null;
  loading: {
    isAdding: boolean,
    isFetching: boolean,
    isOneFetching: boolean,
    isDeleting: boolean,
    isEditing: boolean,
  }
}

const initialState: DishState = {
  dishes: [],
  oneDish: null,
  loading: {
    isAdding: false,
    isFetching: false,
    isOneFetching: false,
    isDeleting: false,
    isEditing: false,
  }
};

export const selectAddDishLoading = (state: RootState) => state.dish.loading.isAdding;
export const selectFetchingDishesLoading = (state: RootState) => state.dish.loading.isAdding;
export const selectAllDishes = (state: RootState) => state.dish.dishes;
export const selectDeleteDishLoading = (state: RootState) => state.dish.loading.isDeleting;
export const selectOneDish = (state: RootState) => state.dish.oneDish;
export const selectOneDishFetchLoading = (state: RootState) => state.dish.loading.isOneFetching;
export const selectEditDishLoading = (state: RootState) => state.dish.loading.isEditing;

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
      })
      .addCase(getOneDishById.pending, (state) => {
        state.loading.isAdding = true;
      })
      .addCase(getOneDishById.fulfilled, (state, action: PayloadAction<IDish | null>) => {
        state.loading.isAdding = false;
        state.oneDish = action.payload;
      })
      .addCase(getOneDishById.rejected, (state) => {
        state.loading.isAdding = false;
      })
      .addCase(editDish.pending, (state) => {
        state.loading.isAdding = true;
      })
      .addCase(editDish.fulfilled, (state) => {
        state.loading.isAdding = false;
        state.oneDish = null;
      })
      .addCase(editDish.rejected, (state) => {
        state.loading.isAdding = false;
      });
  }
});

export const dishReducer = dishSlice.reducer;
export const {} = dishSlice.actions;