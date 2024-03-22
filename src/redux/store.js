import {configureStore} from '@reduxjs/toolkit';
import categoriesSlice from './categoriesSlice';
import productsSlice from './productsSlice';
import cartsSlice from './cartsSlice';

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    carts: cartsSlice,
  },
});

export default store;
