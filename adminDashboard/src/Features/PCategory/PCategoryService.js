import axios from 'axios';
import { base_url } from '@/Utils/base_url';
import { config } from '@/Utils/axiosConfig';

const getCategories = async () => {
    const response = await axios.get(`${base_url}/category`);
    return response.data;
};

const createCategories = async (category) => {
    const response = await axios.post(`${base_url}/category`, category, config);
    return response.data;
};

const PCategory = {
    getCategories,
    createCategories,
};

export default PCategory;
