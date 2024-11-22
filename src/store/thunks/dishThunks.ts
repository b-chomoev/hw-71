import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../axiosAPI';
import { ApiDish } from '../../types';

export const addNewDish = createAsyncThunk<void, ApiDish>(
  'dish/addNewDish',
  async (dishToAdd) => {
    await axiosAPI.post('dishesPizza.json', {...dishToAdd});
  }
);