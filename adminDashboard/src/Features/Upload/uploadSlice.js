/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import uploadService from './uploadService';

export const uploadImg = createAsyncThunk(
    'upload/images',
    async (data, thunkAPI) => {
        try {
            const formData = new FormData();
            for (let i = 0; i < data.length; i++) {
                formData.append('images', data[i]);
            }
            return await uploadService.uploadImg(formData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const initialState = {
    images: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};

export const imagesSlice = createSlice({
    name: 'Images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(uploadImg.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(uploadImg.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = false;
                state.images = action.payload;
            })
            .addCase(uploadImg.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});
export default imagesSlice.reducer;
