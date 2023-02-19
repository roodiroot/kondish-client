import { createSlice } from '@reduxjs/toolkit';
import { fetchGallery } from './ActionCreators';

const initialState = {
  gallery: {},
  isLoading: false,
  error: '',
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchGallery.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = '';
      state.gallery = action.payload;
    });
    builder.addCase(fetchGallery.pending, (state, action) => {
      // Add user to the state array
      state.isLoading = true;
    });
    builder.addCase(fetchGallery.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default gallerySlice.reducer;
