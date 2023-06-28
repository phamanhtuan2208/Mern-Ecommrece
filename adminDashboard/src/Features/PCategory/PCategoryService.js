import axios from 'axios';
import { base_url } from '@/Utils/base_url';

const getCategories = async () => {
    const response = await axios.get(`${base_url}/category`);
    return response.data;
};

const PCategory = {
    getCategories,
};

export default PCategory;
