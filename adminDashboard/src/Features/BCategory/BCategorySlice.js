/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BCategory from './BCategoryService';

export const getBCategory = createAsyncThunk(
    '/blogs/getCategory',
    async (thunkAPI) => {
        try {
            return await BCategory.getBCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const initialState = {
    BCategorys: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};

export const BCategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = false;
                state.BCategorys = action.payload;
            })
            .addCase(getBCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});
export default BCategorySlice.reducer;
