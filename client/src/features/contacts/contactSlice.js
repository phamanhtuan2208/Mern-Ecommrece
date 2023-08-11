import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { contactService } from './contactService';

export const createQuery = createAsyncThunk(
    `enquiry/createQuery`,
    async (data, thunkAPI) => {
        try {
            return await contactService.createContact(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const initialState = {
    contactForm: '',
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
};

export const resetState = createAction('reset_all');

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(createQuery.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createQuery.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.contactForm = action.payload;
                if (state.isSuccess === true) {
                    toast.success('Contact Form Submitted Successfully');
                }
            })
            .addCase(createQuery.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = 'Something went wrong';
                if (state.isError === true) {
                    toast.error('Something went wrong');
                }
            })
            .addCase(resetState, () => initialState);
    },
});

export default contactSlice.reducer;
