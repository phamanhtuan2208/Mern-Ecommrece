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

const getABCategories = async (BCategoryId) => {
    const response = await axios.get(
        `${base_url}/blogcategory/${BCategoryId}`,
        config,
    );
    return response.data;
};

const deleteBCategories = async (BCategoryId) => {
    const response = await axios.delete(
        `${base_url}/blogcategory/${BCategoryId}`,
        config,
    );
    return response.data;
};

const editBCategories = async (BCategory) => {
    const response = await axios.put(
        `${base_url}/blogcategory/${BCategory.id}`,
        { title: BCategory.BCategoryName.title },
        config,
    );
    return response.data;
};

const BCategory = {
    getBCategories,
    createBCategories,
    getABCategories,
    deleteBCategories,
    editBCategories,
};

export default BCategory;
