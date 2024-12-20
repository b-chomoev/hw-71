import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../axiosAPI';
import { ApiDish, IDish } from '../../types';

export const addNewDish = createAsyncThunk<void, ApiDish>(
  'dish/addNewDish',
  async (dishToAdd) => {
    await axiosAPI.post('dishesPizza.json', {...dishToAdd});
  }
);

export const fetchingAllDishes = createAsyncThunk<IDish[], void>(
  'dish/fetchingAllDishes',
  async () => {
    const response: {data: ApiDish | null} = await axiosAPI.get<ApiDish>('dishesPizza.json');

    if (response.data) {
      const dishesInObject = response.data;
      return  Object.keys(dishesInObject).map(id => {
        return {
          ...dishesInObject[id],
          id: id,
        };
      });
    }
    return [];
  }
);

export const deleteDishById = createAsyncThunk<void, string>(
  'dish/deleteDish',
  async (id: string) => {
    await axiosAPI.delete(`dishesPizza/${id}.json`);
  }
);

export const getOneDishById = createAsyncThunk(
  'dish/getOneDishById',
  async (id: string) => {
    const response = await axiosAPI.get<IDish>(`dishesPizza/${id}.json`);

    if (!response.data) {
      return null;
    }

    return response.data;
  }
);

export const editDish = createAsyncThunk<void, {dishId: string, dish: IDish}>(
  'dish/editDish',
  async ({dishId, dish}) => {
    await axiosAPI.put(`dishesPizza/${dishId}.json`, {...dish});
  }
);