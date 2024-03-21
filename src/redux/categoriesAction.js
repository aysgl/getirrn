import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await axios.get('http://localhost:4000/categories');
    return response.data;
  },
);
