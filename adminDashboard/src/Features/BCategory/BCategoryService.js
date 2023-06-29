import axios from 'axios';
import { base_url } from '@/Utils/base_url';

const getBCategories = async () => {
    const response = await axios.get(`${base_url}/blogcategory`);
    return response.data;
};

const BCategory = {
    getBCategories,
};

export default BCategory;
