/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PCategoryService from './PCategoryService';

export const getPCategory = createAsyncThunk(
    '/customer/getCustomers',
    async (thunkAPI) => {
        try {
            return await PCategoryService.PCategory();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const initialState = {
    categorys: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};

export const categorySlice = createSlice({
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
                state.categorys = action.payload;
            })
            .addCase(getPCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});
export default categorySlice.reducer;
