import axios from 'axios';
import { base_url } from '@/Utils/base_url';
import { config } from '@/Utils/axiosConfig';

const getBlogs = async () => {
    const response = await axios.get(`${base_url}/blog`);
    return response.data;
};

const createBlog = async (data) => {
    const response = await axios.post(`${base_url}/blog`, data, config);
    return response.data;
};

const BlogsService = {
    getBlogs,
    createBlog,
};

export default BlogsService;
