import axios from 'axios';
import { base_url } from '@/Utils/base_url';
import { config } from '@/Utils/axiosConfig';

const getProducts = async () => {
    const response = await axios.get(`${base_url}/product/getallproduct`);
    return response.data;
};

const createProducts = async (product) => {
    const response = await axios.post(`${base_url}/product`, product, config);
    return response.data;
};

const ProductService = {
    getProducts,
    createProducts,
};

export default ProductService;
