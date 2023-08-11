import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { authService } from './userService';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
        try {
            return await authService.register(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            return await authService.login(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const getUserProductWishList = createAsyncThunk(
    'user/wishlist',
    async (thunkAPI) => {
        try {
            return await authService.getUserWishlist();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const initialState = {
    user: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const resetState = createAction('Reset_all');

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.createdUser = action.payload;
                if (state.isSuccess === true) {
                    toast.success('User Created Successfully');
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(
                        `User Available or Something went Wrong, Error Code: ${action.payload.message}`,
                    );
                }
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.loginUserData = action.payload;
                if (state.isSuccess === true) {
                    toast.success('User Created Successfully');
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(
                        `User Available or Something went Wrong, Error Code: ${action.payload.message}`,
                    );
                }
            })
            .addCase(getUserProductWishList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserProductWishList.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
                state.message = '';
                state.wishlist = action.payload;
            })
            .addCase(getUserProductWishList.rejected, (state, action) => {
                state.isSuccess = false;
                state.isError = true;
                state.isLoading = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});

export default authSlice.reducer;
