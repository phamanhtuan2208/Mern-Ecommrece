import axios from 'axios';
import { base_url } from '@/Utils/base_url';

const getBlogs = async () => {
    const response = await axios.get(`${base_url}/blog`);
    return response.data;
};

const BlogsService = {
    getBlogs,
};

export default BlogsService;
