import axios from 'axios';
import { base_url } from '@/Utils/base_url';
import { config } from '@/Utils/axiosConfig';

const getBCategories = async () => {
    const response = await axios.get(`${base_url}/blogcategory`);
    return response.data;
};

const createBCategories = async (category) => {
    const response = await axios.post(
        `${base_url}/blogcategory`,
        category,
        config,
    );
    return response.data;
};

const BCategory = {
    getBCategories,
    createBCategories,
};

export default BCategory;
