/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CustomerService from './CustomerService';

export const getUsers = createAsyncThunk('/customers/getCustomers', async (thunkAPI) => {
    try {
        return await CustomerService.getUsers();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const initialState = {
    customers: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = false;
                state.customers = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});
export default customerSlice.reducer;
