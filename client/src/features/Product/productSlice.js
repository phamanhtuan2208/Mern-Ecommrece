import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { productService } from './productService';

export const getAllProduct = createAsyncThunk(
    'product/getAllProduct',
    async (thunkAPI) => {
        try {
            return await productService.getProducts();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const addToWishList = createAsyncThunk(
    'product/addToWishList',
    async (prodId, thunkAPI) => {
        try {
            return await productService.addToWishList(prodId);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const initialState = {
    products: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const resetState = createAction('Reset_all');

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.ProductData = action.payload;
            })
            .addCase(getAllProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
            })
            .addCase(addToWishList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToWishList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.AddWishlist = action.payload;
                state.message = 'Product Added to Wishlist!';
            })
            .addCase(addToWishList.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});

export default productSlice.reducer;
