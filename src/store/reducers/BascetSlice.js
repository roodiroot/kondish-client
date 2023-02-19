import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsBasket: [],
  count: 0,
  countPosition: 0,
  totalSumm: 0,
  delivery: false,
  installation: false,
};

export const bascetSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct(state, action) {
      if (state.productsBasket.length === 0) {
        state.productsBasket.push(action.payload);
      } else {
        let bool = false;
        for (let i = 0; i < state.productsBasket.length; i++) {
          if (state.productsBasket[i].name === action.payload.name) {
            bool = true;
            break;
          }
        }
        if (!bool) {
          state.productsBasket.push(action.payload);
        }
      }
      state.count = state.productsBasket.length;
    },
    changeCountProduct(state, action) {
      for (let el in state.productsBasket) {
        if (state.productsBasket[el].name === action.payload.name) {
          state.productsBasket[el].count = action.payload.count;
        }
      }
    },
    counterElement(state) {
      let allCount = 0;
      let allSumm = 0;
      for (let i = 0; i < state.productsBasket.length; i++) {
        allCount += state.productsBasket[i].count;
        state.productsBasket[i].summ =
          state.productsBasket[i].count * state.productsBasket[i].propertys.price;
        allSumm += state.productsBasket[i].summ;
      }
      state.countPosition = allCount;
      state.totalSumm = allSumm;
    },
    deletElement(state, action) {
      console.log(action.payload);
      let arr = state.productsBasket.filter((i) => i.name !== action.payload);
      state.productsBasket = arr;

      state.count -= 1;

      let allCount = 0;
      let allSumm = 0;
      for (let i = 0; i < state.productsBasket.length; i++) {
        allCount += state.productsBasket[i].count;
        state.productsBasket[i].summ =
          state.productsBasket[i].count * state.productsBasket[i].propertys.price;
        allSumm += state.productsBasket[i].summ;
      }
      state.countPosition = allCount;
      state.totalSumm = allSumm;
    },
    addDelivery(state, action) {
      state.delivery = action.payload;
    },
    addInstallation(state, action) {
      state.installation = action.payload;
    },
    dropBasket(state) {
      state.productsBasket = [];
      state.count = 0;
      state.countPosition = 0;
      state.totalSumm = 0;
      state.delivery = false;
      state.initialState = false;
    },
  },
});

export default bascetSlice.reducer;
