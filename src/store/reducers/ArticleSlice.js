import { createSlice } from "@reduxjs/toolkit";
import { fetchArticles, fetchOneArticle } from "./ActionCreators";

const initialState = {
  articles: {},
  article: {},
  isLoading: false,
  error: "",
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = "";
      state.articles = action.payload;
    });
    builder.addCase(fetchArticles.pending, (state, action) => {
      // Add user to the state array
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchOneArticle.fulfilled, (state, action) => {
      // Add user to the state array
      state.article = action.payload;
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchOneArticle.pending, (state, action) => {
      // Add user to the state array
      state.isLoading = true;
    });
    builder.addCase(fetchOneArticle.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default articleSlice.reducer;
