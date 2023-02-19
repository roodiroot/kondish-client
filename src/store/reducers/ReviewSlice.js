import { createSlice } from "@reduxjs/toolkit";
import { fetchReviews } from "./ActionCreators";

const initialState = {
  reviews: {},
  isLoading: false,
  error: "",
};
export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(fetchReviews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReviews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default reviewSlice.reducer;
