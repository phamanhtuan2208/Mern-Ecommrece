import axios from 'axios';
import { base_url } from '~/Utils/axiosConfig';

const register = async (userData) => {
    const response = await axios.post(`${base_url}/user/register`, userData);
    return response.data;
};

export const authService = {
    register,
};
