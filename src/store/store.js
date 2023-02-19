import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/UserSlice';
import productReducer from './reducers/ProductSlice';
import articleReducer from './reducers/ArticleSlice';
import bascetReducer from './reducers/BascetSlice';
import reviewReducer from './reducers/ReviewSlice';
import galleryReducer from './reducers/GallerySlice';

const rootReducer = combineReducers({
  userReducer,
  productReducer,
  articleReducer,
  bascetReducer,
  reviewReducer,
  galleryReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
