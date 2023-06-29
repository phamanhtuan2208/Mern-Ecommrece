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
                state.isSuccess = false;
                state.PCategorys = action.payload;
            })
            .addCase(getPCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});
export default PCategorySlice.reducer;
