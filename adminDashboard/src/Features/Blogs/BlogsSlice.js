/* eslint-disable no-undef */
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import BlogsService from './BlogsService';

export const getBlogs = createAsyncThunk(
    '/blogs/getBlogs',
    async (thunkAPI) => {
        try {
            return await BlogsService.getBlogs();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const createBlog = createAsyncThunk(
    '/blogs/create-blogs',
    async (data, thunkAPI) => {
        try {
            return await BlogsService.createBlog(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const getABlog = createAsyncThunk(
    '/blogs/get-a-blogs',
    async (data, thunkAPI) => {
        try {
            return await BlogsService.getABlog(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const updateBlog = createAsyncThunk(
    '/blogs/update-blogs',
    async (id, thunkAPI) => {
        try {
            return await BlogsService.updateBlog(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const deleteBlog = createAsyncThunk(
    '/blogs/delete-blogs',
    async (id, thunkAPI) => {
        try {
            return await BlogsService.deleteBlog(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const resetState = createAction('Reset_all');

const initialState = {
    blogs: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBlogs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.blogs = action.payload;
            })
            .addCase(getBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdBlogs = action.payload;
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getABlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getABlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.blogName = action.payload.title;
                state.blogDesc = action.payload.description;
                state.blogCategory = action.payload.category;
            })
            .addCase(getABlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(updateBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedBlog = action.payload;
            })
            .addCase(updateBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deleteBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedBlog = action.payload;
            })
            .addCase(deleteBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});
export default blogSlice.reducer;
