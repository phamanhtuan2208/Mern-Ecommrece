import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { blogService } from './blogService';

export const getAllBlogs = createAsyncThunk(
    'blogs/getAllBlogs',
    async (thunkAPI) => {
        try {
            return await blogService.getBlogs();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const getABlog = createAsyncThunk(
    `blog/getABlogs`,
    async (id, thunkAPI) => {
        try {
            return await blogService.getABlog(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const initialState = {
    blogs: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const resetState = createAction('Reset_all');

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.BlogsData = action.payload;
            })
            .addCase(getAllBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
            })
            .addCase(getABlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getABlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.singleBlog = action.payload;
            })
            .addCase(getABlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});

export default blogSlice.reducer;
