import axios from 'axios';
import { base_url, config } from '~/Utils/axiosConfig';

const getProducts = async (data) => {
    const response = await axios.get(
        `
        ${base_url}/product/getallproduct?${
            data?.minPrice ? `price[gte]=${data?.minPrice}&` : ''
        }${data?.maxPrice ? `price[lte]=${data?.maxPrice}&` : ''}${
            data?.Brand ? `brand=${data?.Brand}&` : ''
        }${data?.Tag ? `tags=${data?.Tag}&` : ''}${
            data?.Category ? `category=${data?.Category}&` : ''
        }
        `,
    );
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
