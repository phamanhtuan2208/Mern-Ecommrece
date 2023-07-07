/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
            });
    },
});
export default PCategorySlice.reducer;
