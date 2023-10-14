import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
        console.log("Add Product");
      },
      deleteProduct(state, action) {
        console.log("Delete Product");
      },
    },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
