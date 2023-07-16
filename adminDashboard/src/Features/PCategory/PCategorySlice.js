/* eslint-disable no-undef */
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import PCategory from './PCategoryService';

export const getPCategory = createAsyncThunk(
    '/products/getCategory',
    async (thunkAPI) => {
        try {
            return await PCategory.getCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const createCategory = createAsyncThunk(
    '/products/createCategory',
    async (data, thunkAPI) => {
        try {
            return await PCategory.createCategories(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const getAProductCategories = createAsyncThunk(
    '/products/getAProductCategories',
    async (id, thunkAPI) => {
        try {
            return await PCategory.getProductCategories(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const deleteProductCategories = createAsyncThunk(
    '/products/deleteProductCategories',
    async (id, thunkAPI) => {
        try {
            return await PCategory.deleteProductCategories(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const updateProductCategories = createAsyncThunk(
    '/products/updateProductCategories',
    async (id, thunkAPI) => {
        try {
            return await PCategory.updateProductCategories(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const resetState = createAction('Reset_all');

const initialState = {
    PCategorys: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};

export const PCategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.PCategorys = action.payload;
            })
            .addCase(getPCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createPCategorys = action.payload;
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getAProductCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAProductCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.ProductCategoriesName = action.payload.title;
            })
            .addCase(getAProductCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(updateProductCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateProductCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedProductsCategories = action.payload;
            })
            .addCase(updateProductCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deleteProductCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteProductCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedProductsCategories = action.payload;
            })
            .addCase(deleteProductCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            
            .addCase(resetState, () => initialState);
    },
});
export default PCategorySlice.reducer;
