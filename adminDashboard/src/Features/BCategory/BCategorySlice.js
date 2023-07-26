/* eslint-disable no-undef */
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import BCategory from './BCategoryService';

export const getBCategory = createAsyncThunk(
    '/blogs/getBCategory',
    async (thunkAPI) => {
        try {
            return await BCategory.getBCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const getABCategory = createAsyncThunk(
    '/blogs/getABCategory',
    async (id, thunkAPI) => {
        try {
            return await BCategory.getABCategories(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const createBCategory = createAsyncThunk(
    '/blogs/createBCategory',
    async (data, thunkAPI) => {
        try {
            return await BCategory.createBCategories(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const deleteBCategory = createAsyncThunk(
    '/blogs/deleteBCategory',
    async (data, thunkAPI) => {
        try {
            return await BCategory.deleteBCategories(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const editBCategory = createAsyncThunk(
    '/blogs/editBCategory',
    async (data, thunkAPI) => {
        try {
            return await BCategory.editBCategories(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const resetState = createAction('Reset_all');

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
                state.isSuccess = true;
                state.BCategorys = action.payload;
            })
            .addCase(getBCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createBCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createBCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdBCategorys = action.payload;
            })
            .addCase(createBCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getABCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getABCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.BCategoryName = action.payload.title;
            })
            .addCase(getABCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deleteBCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteBCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedBCategory = action.payload;
            })
            .addCase(deleteBCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(editBCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editBCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.editedBCategory = action.payload;
            })
            .addCase(editBCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});
export default BCategorySlice.reducer;
