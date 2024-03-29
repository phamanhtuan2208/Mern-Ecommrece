import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { authService } from './userService';
import { useNavigate } from 'react-router-dom';

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

export const addProdToCart = createAsyncThunk(
    'user/cart/add',
    async (cartData, thunkAPI) => {
        try {
            return await authService.addToCart(cartData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const getProdCart = createAsyncThunk(
    'user/cart/getCart',
    async (thunkAPI) => {
        try {
            return await authService.getCart();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const deleteCartProduct = createAsyncThunk(
    'user/cart/product/delete',
    async (cartItemId, thunkAPI) => {
        try {
            return await authService.removeProductFromCart(cartItemId);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const updateCartProduct = createAsyncThunk(
    'user/cart/product/update',
    async (cartDetail, thunkAPI) => {
        try {
            return await authService.updateProductFromCart(cartDetail);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const createAnOrder = createAsyncThunk(
    'user/cart/createOrder',
    async (orderDetail, thunkAPI) => {
        try {
            return await authService.createOrder(orderDetail);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const getUsersOrder = createAsyncThunk(
    'user/cart/getUserOrder',
    async (thunkAPI) => {
        try {
            return await authService.getUserOrder();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const updateAProfile = createAsyncThunk(
    'user/updateUser',
    async (data, thunkAPI) => {
        try {
            return await authService.updateUser(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const ForgotPass = createAsyncThunk(
    'user/forgotpassword',
    async (data, thunkAPI) => {
        try {
            return await authService.ForgotPassToken(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const ResetPass = createAsyncThunk(
    'user/resetpassword',
    async (data, thunkAPI) => {
        try {
            return await authService.ResetPasswordToken(data);
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
                    toast.success('User Login Successfully');
                    window.history.back();
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(
                        `User Available or Something went Wrong, Check again your gmail and password and try again`,
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
            .addCase(addProdToCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addProdToCart.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
                state.message = '';
                state.cartProdData = action.payload;
                if (state.isSuccess) {
                    toast.success('Product Added to Cart');
                }
            })
            .addCase(addProdToCart.rejected, (state, action) => {
                state.isSuccess = false;
                state.isError = true;
                state.isLoading = false;
                state.message = action.error;
                if (state.isError) {
                    toast.error('Something went Wrong');
                }
            })
            .addCase(getProdCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProdCart.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
                state.message = '';
                state.getCartProduct = action.payload;
            })
            .addCase(getProdCart.rejected, (state, action) => {
                state.isSuccess = false;
                state.isError = true;
                state.isLoading = false;
                state.message = action.error;
            })
            .addCase(deleteCartProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteCartProduct.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
                state.message = '';
                state.deleteCartProduct = action.payload;
                if (state.isSuccess) {
                    toast.success('Product delete from Cart successfully');
                }
            })
            .addCase(deleteCartProduct.rejected, (state, action) => {
                state.isSuccess = false;
                state.isError = true;
                state.isLoading = false;
                state.message = action.error;
                if (state.isError) {
                    toast.error('Something went Wrong');
                }
            })
            .addCase(updateCartProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateCartProduct.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
                state.message = '';
                state.updateACartProduct = action.payload;
                if (state.isSuccess) {
                    toast.success('Product updated from Cart successfully');
                }
            })
            .addCase(updateCartProduct.rejected, (state, action) => {
                state.isSuccess = false;
                state.isError = true;
                state.isLoading = false;
                state.message = action.error;
                if (state.isError) {
                    toast.error('Something went Wrong');
                }
            })
            .addCase(createAnOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createAnOrder.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
                state.message = '';
                state.orderedProduct = action.payload;
                if (state.isSuccess) {
                    toast.success('Order Successfully');
                }
            })
            .addCase(createAnOrder.rejected, (state, action) => {
                state.isSuccess = false;
                state.isError = true;
                state.isLoading = false;
                state.message = action.error;
                if (state.isError) {
                    toast.error('Something went Wrong');
                }
            })
            .addCase(getUsersOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUsersOrder.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
                state.message = '';
                state.getOrderedProduct = action.payload;
            })
            .addCase(getUsersOrder.rejected, (state, action) => {
                state.isSuccess = false;
                state.isError = true;
                state.isLoading = false;
                state.message = action.error;
            })
            .addCase(updateAProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateAProfile.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
                state.updateAUser = action.payload;
                if (state.isSuccess) {
                    toast.success(
                        'Profile Updated Successfully, save change when you login again',
                    );
                }
            })
            .addCase(updateAProfile.rejected, (state, action) => {
                state.isSuccess = false;
                state.isError = true;
                state.isLoading = false;
                state.message = action.error;
                if (state.isError) {
                    toast.error('Something went Wrong Or infected');
                }
            })
            .addCase(ForgotPass.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(ForgotPass.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
                state.forgotPasswordToken = action.payload;
                if (state.isSuccess) {
                    toast.success('Forgot Email Sent Successfully');
                }
            })
            .addCase(ForgotPass.rejected, (state, action) => {
                state.isSuccess = false;
                state.isError = true;
                state.isLoading = false;
                state.message = action.error;
                if (state.isError) {
                    toast.error('Something went Wrong');
                }
            })
            .addCase(ResetPass.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(ResetPass.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
                state.ResetPasswordToken = action.payload;
                if (state.isSuccess) {
                    toast.success('Reset Password Successfully');
                }
            })
            .addCase(ResetPass.rejected, (state, action) => {
                state.isSuccess = false;
                state.isError = true;
                state.isLoading = false;
                state.message = action.error;
                if (state.isError) {
                    toast.error('Something went Wrong');
                }
            })
            .addCase(resetState, () => initialState);
    },
});

export default authSlice.reducer;
