import axios from 'axios';
import { base_url } from '@/Utils/base_url';

const getBrands = async (userData) => {
    const response = await axios.get(`${base_url}/brand`, userData);
    return response.data;
};

const brandService = {
    getBrands,
};

export default brandService;
