/* eslint-disable no-undef */
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import ProductService from './ProductService';

export const getProducts = createAsyncThunk(
    '/products/getProducts',
    async (thunkAPI) => {
        try {
            return await ProductService.getProducts();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const createProducts = createAsyncThunk(
    '/products/createProducts',
    async (data, thunkAPI) => {
        try {
            return await ProductService.createProducts(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);
export const resetState = createAction('Reset_all');

const initialState = {
    products: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                // state.createProducts = action.payload;
            })
            .addCase(createProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});
export default productSlice.reducer;
