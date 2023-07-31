/* eslint-disable no-undef */
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import EnquiryService from './EnquiryService';

export const getInquiry = createAsyncThunk(
    '/enquiry/getInquiry',
    async (thunkAPI) => {
        try {
            return await EnquiryService.getEnquiry();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const deleteEnquiry = createAsyncThunk(
    '/enquiry/deleteEnquiry',
    async (id, thunkAPI) => {
        try {
            return await EnquiryService.deleteEnquiry(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const getAEnquiry = createAsyncThunk(
    '/enquiry/getAEnquiry',
    async (id, thunkAPI) => {
        try {
            return await EnquiryService.getAEnquiry(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const updateEnquiry = createAsyncThunk(
    '/enquiry/updateEnquiry',
    async (enq, thunkAPI) => {
        try {
            return await EnquiryService.updateEnquiry(enq);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const resetState = createAction('Reset_all');

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
                state.isSuccess = true;
                state.inquiries = action.payload;
            })
            .addCase(getInquiry.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deleteEnquiry.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteEnquiry.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedEnquiry = action.payload;
            })
            .addCase(deleteEnquiry.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getAEnquiry.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAEnquiry.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.enqName = action.payload.name;
                state.enqMobile = action.payload.mobile;
                state.enqEmail = action.payload.email;
                state.enqComment = action.payload.comment;
                state.enqStatus = action.payload.status;
            })
            .addCase(getAEnquiry.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(updateEnquiry.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateEnquiry.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedEnquiry = action.payload;
            })
            .addCase(updateEnquiry.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});
export default inquirySlice.reducer;
