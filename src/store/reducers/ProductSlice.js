import { createSlice } from "@reduxjs/toolkit";
import {
  fetchHITProducts,
  fetchProduct,
  fetchProducts,
} from "./ActionCreators";

const initialState = {
  products: {},
  hitproducts: {},
  oneProduct: {},
  isLoading: false,
  reject: false,
  error: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.reject = false;
      state.error = "";
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      // Add user to the state array
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      // Add user to the state array
      state.reject = true;
      state.isLoading = false;
      state.error = action.payload;
      console.log(action.payload);
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      // Add user to the state array
      state.oneProduct = action.payload;
      state.isLoading = false;
      state.reject = false;
      state.error = "";
    });
    builder.addCase(fetchProduct.pending, (state) => {
      // Add user to the state array
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      // Add user to the state array
      state.reject = true;
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchHITProducts.fulfilled, (state, action) => {
      // Add user to the state array
      state.hitproducts = action.payload;
    });
  },
});

export default productSlice.reducer;
