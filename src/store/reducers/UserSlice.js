import { createSlice } from "@reduxjs/toolkit";
import { checkUser, loginUser } from "./ActionCreators";

const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOutUser(state) {
      state.user = null;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = "";
      state.isAuth = true;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(checkUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = "";
      state.isAuth = true;
    });
    builder.addCase(checkUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
