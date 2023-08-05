import { configureStore } from '@reduxjs/toolkit';
import productSlice from '~/features/Product/productSlice';
import userSlice from '~/features/User/userSlice';

export const store = configureStore({
    reducer: {
        auth: userSlice,
        product: productSlice,
    },
});
