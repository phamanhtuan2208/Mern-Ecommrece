import axios from 'axios';
import { base_url } from '~/Utils/axiosConfig';

const getBlogs = async () => {
    const response = await axios.get(`${base_url}/blog`);
    return response.data;
};

const getABlog = async (id) => {
    const response = await axios.get(`${base_url}/blog/${id}`);
    return response.data;
};

export const blogService = {
    getBlogs,
    getABlog,
};
