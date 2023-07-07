import axios from 'axios';
import { base_url } from '@/Utils/base_url';
import { config } from '@/Utils/axiosConfig';

const getBrands = async (userData) => {
    const response = await axios.get(`${base_url}/brand`, userData);
    return response.data;
};

const createBrands = async (brand) => {
    const response = await axios.post(`${base_url}/brand`, brand, config);
    return response.data;
};

const brandService = {
    getBrands,
    createBrands,
};

export default brandService;
