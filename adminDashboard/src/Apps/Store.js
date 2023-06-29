import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/Features/Auth/AuthSlice';
import CustomerReducer from '@/Features/Customers/CustomerSlice';
import ProductReducer from '@/Features/Product/ProductSlice';
import BrandReducer from '@/Features/Brands/BrandSlice';
import PCategory from '@/Features/PCategory/PCategorySlice';
import Color from '@/Features/Colors/ColorSlice';
import Blogs from '@/Features/Blogs/BlogsSlice';
import BCategorySlice from '@/Features/BCategory/BCategorySlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: CustomerReducer,
        product: ProductReducer,
        brand: BrandReducer,
        pCategory: PCategory,
        color: Color,
        blog: Blogs,
        bCategory: BCategorySlice,
    },
});
