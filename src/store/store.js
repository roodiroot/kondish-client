import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/UserSlice";
import productReducer from "./reducers/ProductSlice";
import articleReducer from "./reducers/ArticleSlice";
import bascetReducer from "./reducers/BascetSlice";
import reviewReducer from "./reducers/ReviewSlice";
import galleryReducer from "./reducers/GallerySlice";
import notificationReducer from "./reducers/NotificationSlice";

const rootReducer = combineReducers({
  userReducer,
  productReducer,
  articleReducer,
  bascetReducer,
  reviewReducer,
  galleryReducer,
  notificationReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
