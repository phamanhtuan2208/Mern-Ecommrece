/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ColorService from './ColorService';

export const getColors = createAsyncThunk(
    '/colors/getColor',
    async (thunkAPI) => {
        try {
            return await ColorService.getColors();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const createColor = createAsyncThunk(
    '/colors/createdColor',
    async (data, thunkAPI) => {
        try {
            return await ColorService.createColors(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const initialState = {
    colors: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getColors.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getColors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.colors = action.payload;
            })
            .addCase(getColors.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createColor.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createColor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdColors = action.payload;
            })
            .addCase(createColor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});
export default colorSlice.reducer;
