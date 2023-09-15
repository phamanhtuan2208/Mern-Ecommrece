import axios from 'axios';
import { base_url, config } from '~/Utils/axiosConfig';

const register = async (userData) => {
    const response = await axios.post(`${base_url}/user/register`, userData);
    return response.data;
};

const login = async (userData) => {
    const response = await axios.post(`${base_url}/user/login`, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const getUserWishlist = async () => {
    const response = await axios.get(`${base_url}/user/wishlist`, config);
    return response.data;
};

const addToCart = async (cartData) => {
    const response = await axios.post(
        `${base_url}/user/cart`,
        cartData,
        config,
    );
    return response.data;
};

const getCart = async () => {
    const response = await axios.get(`${base_url}/user/cart`, config);
    return response.data;
};

const removeProductFromCart = async (cartItemId) => {
    const response = await axios.delete(
        `${base_url}/user/deletecart/${cartItemId}`,
        config,
    );
    return response.data;
};

const updateProductFromCart = async (cartDetail) => {
    const response = await axios.put(
        `${base_url}/user/updatequantity/${cartDetail?.cartItemId}`,
        { newQuantity: cartDetail?.newQuantity },
        config,
    );
    return response.data;
};

const createOrder = async (orderDetail) => {
    const response = await axios.post(
        `${base_url}/user/cart/cashorder`,
        orderDetail,
        config,
    );
    return response.data;
};

const getUserOrder = async () => {
    const response = await axios.get(`${base_url}/user/getMyOrder`, config);
    return response.data;
};

const updateUser = async (data) => {
    const response = await axios.put(`${base_url}/user/edituser`, data, config);
    return response.data;
};

const ForgotPassToken = async (data) => {
    const response = await axios.post(
        `${base_url}/user/forgotpasswordtoken`,
        data,
        config,
    );
    return response.data;
};

const ResetPasswordToken = async (data) => {
    const response = await axios.put(
        `${base_url}/user/resetpassword/${data?.token}`,
        { password: data?.password },
        config,
    );
    return response.data;
};

export const authService = {
    register,
    login,
    getUserWishlist,
    addToCart,
    getCart,
    removeProductFromCart,
    updateProductFromCart,
    createOrder,
    getUserOrder,
    updateUser,
    ForgotPassToken,
    ResetPasswordToken,
};
