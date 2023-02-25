import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alarm: false,
  message: "",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    dindon(state, action) {
      state.alarm = true;
      state.message = action.payload;
    },
    stop(state, action) {
      state.alarm = false;
      state.message = "";
    },
  },
});

export default notificationSlice.reducer;
