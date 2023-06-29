/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import EnquiryService from './EnquiryService';

export const getInquiry = createAsyncThunk(
    '/colors/getColor',
    async (thunkAPI) => {
        try {
            return await EnquiryService.getEnquiry();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const initialState = {
    inquiries: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};

export const inquirySlice = createSlice({
    name: 'Enquiry',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getInquiry.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getInquiry.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = false;
                state.inquiries = action.payload;
            })
            .addCase(getInquiry.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});
export default inquirySlice.reducer;
