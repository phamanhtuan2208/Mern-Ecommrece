/* eslint-disable no-undef */
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import couponService from './CouponService';

export const getCoupon = createAsyncThunk(
    '/coupon/getCoupon',
    async (thunkAPI) => {
        try {
            return await couponService.getCoupons();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const createCoupon = createAsyncThunk(
    '/coupon/createCoupon',
    async (data, thunkAPI) => {
        try {
            return await couponService.createCoupons(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const getACoupon = createAsyncThunk(
    '/coupon/getACoupon',
    async (id, thunkAPI) => {
        try {
            return await couponService.getACoupon(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const deleteCoupon = createAsyncThunk(
    '/coupon/deleteCoupon',
    async (id, thunkAPI) => {
        try {
            return await couponService.deleteCoupon(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const updateCoupon = createAsyncThunk(
    '/coupon/updateCoupon',
    async (id, thunkAPI) => {
        try {
            return await couponService.updateCoupons(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const resetState = createAction('Reset_all');

const initialState = {
    coupons: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};

export const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCoupon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCoupon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.coupons = action.payload;
            })
            .addCase(getCoupon.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getACoupon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getACoupon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.CouponDataName = action.payload.name;
                state.CouponDataExpiry = action.payload.expiry;
                state.CouponDataDiscount = action.payload.discount;
            })
            .addCase(getACoupon.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createCoupon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createCoupon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createCoupons = action.payload;
            })
            .addCase(createCoupon.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deleteCoupon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteCoupon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedCoupon = action.payload;
            })
            .addCase(deleteCoupon.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(updateCoupon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateCoupon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedCoupon = action.payload;
            })
            .addCase(updateCoupon.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});
export default couponSlice.reducer;
