import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await axios.get('http://localhost:4000/products');
    return response.data;
  },
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async data => {
    await axios.post('http://localhost:4000/products', data);
    return data;
  },
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async id => {
    await axios.delete(`http://localhost:4000/products/${id}`);
    return id;
  },
);
