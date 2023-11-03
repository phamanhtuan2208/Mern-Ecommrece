import axios from 'axios';
import { base_url, config } from '~/Utils/axiosConfig';

const getProducts = async () => {
    const response = await axios.get(`${base_url}/product/getallproduct`);
    return response.data;
};

const getSingleProduct = async (id) => {
    const response = await axios.get(`${base_url}/product/${id}`);
    return response.data;
};

const addToWishList = async (prodId) => {
    const response = await axios.put(
        `${base_url}/product/wishlist`,
        {
            prodId,
        },
        config,
    );
    return response.data;
};

const rateProduct = async (data) => {
    const response = await axios.put(
        `${base_url}/product/rating`,

        data,

        config,
    );
    return response.data;
};

export const productService = {
    getProducts,
    addToWishList,
    getSingleProduct,
    rateProduct,
};
