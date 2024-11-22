import { createSlice } from '@reduxjs/toolkit';
import { IDish } from '../../types';
import { addNewDish } from '../thunks/dishThunks';
import { RootState } from '../../app/store';

interface DishState {
  dishes: IDish[];
  loading: {
    isAdding: boolean,
  }
}

const initialState: DishState = {
  dishes: [],
  loading: {
    isAdding: false,
  }
};

export const selectAddDishLoading = (state: RootState) => state.dish.loading.isAdding;

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
      });
  }
});

export const dishReducer = dishSlice.reducer;
export const {} = dishSlice.actions;