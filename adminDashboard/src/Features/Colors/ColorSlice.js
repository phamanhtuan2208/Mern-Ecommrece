/* eslint-disable no-undef */
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
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

export const getAColor = createAsyncThunk(
    '/colors/getAColor',
    async (id, thunkAPI) => {
        try {
            return await ColorService.getAColors(id);
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

export const deleteColors = createAsyncThunk(
    '/colors/deleteColor',
    async (data, thunkAPI) => {
        try {
            return await ColorService.deleteColors(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const editColors = createAsyncThunk(
    '/colors/editColor',
    async (data, thunkAPI) => {
        try {
            return await ColorService.editColor(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const resetState = createAction('Reset_all');

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
            .addCase(getAColor.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAColor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.colorName = action.payload.title;
            })
            .addCase(getAColor.rejected, (state, action) => {
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
            })
            .addCase(deleteColors.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteColors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedColor = action.payload;
            })
            .addCase(deleteColors.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(editColors.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editColors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedColors = action.payload;
            })
            .addCase(editColors.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});
export default colorSlice.reducer;
