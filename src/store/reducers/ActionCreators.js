import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArticles, getOneArticles } from "../../http/articleAPI";
import { getGalleryAPI } from "../../http/galleryAPI";

import { getOneProductAPI, getProductAPI } from "../../http/productAPI";
import { getReviewsAPI } from "../../http/reviewsAPI";
import { checkAPI, loginAPI } from "../../http/userAPI";

// Получение всех продуктов
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (filters, thunkAPI) => {
    try {
      const data = await getProductAPI(filters);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
// Получение всех hit продуктов
export const fetchHITProducts = createAsyncThunk(
  "product/fetchHITProducts",
  async (filters, thunkAPI) => {
    try {
      const data = await getProductAPI(filters);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
// Получение одного товара
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id, thunkAPI) => {
    try {
      const data = await getOneProductAPI(id);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
// Получение всех статей
export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async (filters, thunkAPI) => {
    try {
      const data = await getArticles(filters);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
// Получение одной статьи
export const fetchOneArticle = createAsyncThunk(
  "article/fetchOneArticle",
  async (id, thunkAPI) => {
    try {
      const data = await getOneArticles(id);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

// ПОЛУЧЕНИЕ ВСЕХ ОТЗЫВОВ
export const fetchReviews = createAsyncThunk(
  "review/fetchReviews",
  async (_, thunkAPI) => {
    try {
      const data = await getReviewsAPI();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

// ПОЛУЧЕНИЕ ВСЕЙ ГАЛЕРЕИ
export const fetchGallery = createAsyncThunk(
  "gallery/fetchGallery",
  async (filters, thunkAPI) => {
    try {
      const data = await getGalleryAPI(filters);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

//ДОБАВЛЕНИЕ USER В СОСТОЯНИЕ
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (formData, thunkAPI) => {
    try {
      const data = await loginAPI(formData);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
//ПРОВЕРКА USER В СОСТОЯНИИ
export const checkUser = createAsyncThunk(
  "user/checkUser",
  async (_, thunkAPI) => {
    try {
      const data = await checkAPI();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
