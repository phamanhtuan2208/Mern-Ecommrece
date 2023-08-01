import axios from 'axios';
import { base_url } from '@/Utils/base_url';

const getTokenFromLocalStorage = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;

const config = {
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage?.token}`,
        Accept: 'application/json',
    },
};

const login = async (userData) => {
    const response = await axios.post(`${base_url}/user/loginAdmin`, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const getOrders = async () => {
    const response = await axios.get(`${base_url}/user/getallorders`, config);
    return response.data;
};

const getOrder = async (id) => {
    const response = await axios.get(
        `${base_url}/user/getorderbyuser/${id}`,
        config,
    );
    return response.data;
};

const logOut = async () => {
    const response = await axios.get(`${base_url}/user/logout`);
    return response.data;
};

const forgotPassword = async (email) => {
    const response = await axios.post(
        `${base_url}/user/forgotpasswordtoken`,
        email,
    );
    return response.data;
};

const authService = {
    login,
    getOrder,
    getOrders,
    logOut,
    forgotPassword,
};

export default authService;
