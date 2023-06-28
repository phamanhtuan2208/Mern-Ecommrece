import axios from 'axios';
import { base_url } from '@/Utils/base_url';

const getProducts = async () => {
    const response = await axios.get(`${base_url}/product/getallproduct`);
    return response.data;
};

const ProductService = {
    getProducts,
};

export default ProductService;
