import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/Features/Auth/AuthSlice';
import CustomerReducer from '@/Features/Customers/CustomerSlice';
import ProductReducer from '@/Features/Product/ProductSlice';
import BrandReducer from '@/Features/Brands/BrandSlice';
import PCategoryReducer from '@/Features/PCategory/PCategorySlice';
import ColorReducer from '@/Features/Colors/ColorSlice';
import BlogsReducer from '@/Features/Blogs/BlogsSlice';
import BCategorySlice from '@/Features/BCategory/BCategorySlice';
import enquiryReducer from '@/Features/Enquiry/EnquirySlice';
import UploadReducer from '@/Features/Upload/uploadSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: CustomerReducer,
        product: ProductReducer,
        brand: BrandReducer,
        pCategory: PCategoryReducer,
        color: ColorReducer,
        blog: BlogsReducer,
        bCategory: BCategorySlice,
        enquiry: enquiryReducer,
        upload: UploadReducer,
    },
});
