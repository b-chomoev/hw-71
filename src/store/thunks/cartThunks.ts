import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../axiosAPI';
import { DishCart } from '../../types';

export const orderPizza = createAsyncThunk<void, DishCart[]>(
  'orderPizza/orderPizza',
  async (orderToAdd) => {
    await axiosAPI.post('orderPizza.json', {...orderToAdd});
  }
);