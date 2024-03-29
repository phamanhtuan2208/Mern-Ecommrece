import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '@/Features/Auth/AuthService';

const getUserFromLocalStorage = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;

const initialState = {
    user: getUserFromLocalStorage,
    orders: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};

export const login = createAsyncThunk(
    '/user/loginAdmin',
    async (user, thunkAPI) => {
        try {
            return await authService.login(user);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const getOrders = createAsyncThunk(
    '/orders/getallorders',
    async (thunkAPI) => {
        try {
            return await authService.getOrders();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const getOrderByUser = createAsyncThunk(
    '/orders/getorderbyuser',
    async (id, thunkAPI) => {
        try {
            return await authService.getOrder(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const logOut = createAsyncThunk('/user/logOut', async (thunkAPI) => {
    try {
        return await authService.logOut();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const forgotPassword = createAsyncThunk(
    '/user/forgotPassword',
    async (data, thunkAPI) => {
        try {
            return await authService.forgotPassword(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const resetPassword = createAsyncThunk(
    '/user/resetPassword',
    async (data, thunkAPI) => {
        try {
            return await authService.resetPassword(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = 'success';
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.user = null;
                state.message = action.error;
            })
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload;
                state.message = 'success';
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.orders = null;
                state.message = action.error;
            })
            .addCase(getOrderByUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrderByUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.ordersByUser = action.payload;
                state.message = 'success';
            })
            .addCase(getOrderByUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.orders = null;
                state.message = action.error;
            })
            .addCase(logOut.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.message = 'logOut';
            })
            .addCase(logOut.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
            })
            .addCase(forgotPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.dataForgotPassword = action.payload;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
            })
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true;
                state.isSuccessReset = false;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessReset = true;
                state.isError = false;
                state.dataResetPassword = action.payload;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessReset = false;
                state.isError = true;
                state.message = action.error;
            });
    },
});

export default authSlice.reducer;
