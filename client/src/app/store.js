import { configureStore } from '@reduxjs/toolkit';
import blogSlice from '~/features/blogs/blogSlice';
import contactSlice from '~/features/contacts/contactSlice';
import productSlice from '~/features/Product/productSlice';
import userSlice from '~/features/User/userSlice';

export const store = configureStore({
    reducer: {
        auth: userSlice,
        product: productSlice,
        blog: blogSlice,
        contact: contactSlice,
    }, 
});
