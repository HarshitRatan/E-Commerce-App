import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

const API_URL = "https://fakestoreapi.com/products";
export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: true,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isLoading = true;
      state.data = [];
      state.isError = false;
      return state;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
      return state;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.isError = true;
      return state;
    });
  },
  reducers: {
    addProduct(state, action) {
      const id = state.data.length + 1;
      const newProduct = { id, ...action.payload };
      state.data = [newProduct, ...current(state).data];
      return state;
    },
    deleteProduct(state, action) {
      const updatedProduct = current(state).data.filter(
        (product) => product.id !== action.payload
      );
      state.data = updatedProduct;
      return state;
    },
    sortProductHighToLow(state, action) {
      const currentProductArray = current(state).data;
      const preSortCurrentArray = [...currentProductArray];
      preSortCurrentArray.sort(
        (firstProduct, secondProduct) =>
          secondProduct.price - firstProduct.price
      );
      state.data = preSortCurrentArray;
      return state;
    },
    sortProductLowToHigh(state, action) {
      const currentProductArray = current(state).data;
      const preSortCurrentArray = [...currentProductArray];
      preSortCurrentArray.sort(
        (firstProduct, secondProduct) =>
          firstProduct.price - secondProduct.price
      );
      state.data = preSortCurrentArray;
      return state;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  sortProductHighToLow,
  sortProductLowToHigh,
} = productSlice.actions;
export default productSlice.reducer;
