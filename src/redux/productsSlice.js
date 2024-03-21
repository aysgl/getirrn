import {createSlice} from '@reduxjs/toolkit';
import {addProduct, deleteProduct, getProducts} from './productsAction';

const productsSlice = createSlice({
  name: 'Products',
  initialState: {
    products: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProducts.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products = action.payload;
      })
      .addCase(addProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(addProduct.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products.push(action.payload);
      })
      .addCase(deleteProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products = state.products.filter(
          pro => pro.id !== action.payload,
        );
      });
  },
});

export default productsSlice.reducer;
// export const {clearFilters} = productsSlice.actions;
