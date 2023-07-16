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

const getProductCategories = async (id) => {
    const response = await axios.get(`${base_url}/category/${id}`, config);
    return response.data;
};

const deleteProductCategories = async (id) => {
    const response = await axios.delete(`${base_url}/category/${id}`, config);
    return response.data;
};

const updateProductCategories = async (category) => {
    const response = await axios.put(
        `${base_url}/category/${category.id}`,
        // { title: category.brandData.title },
        config,
    );
    return response.data;
};

const PCategory = {
    getCategories,
    createCategories,
    getProductCategories,
    deleteProductCategories,
    updateProductCategories,
};

export default PCategory;
