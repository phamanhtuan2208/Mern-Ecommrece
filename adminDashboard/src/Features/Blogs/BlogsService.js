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

const getABlog = async (id) => {
    const response = await axios.get(`${base_url}/blog/${id}`, config);
    return response.data;
};

const updateBlog = async (blog) => {
    const response = await axios.put(
        `${base_url}/blog/${blog.id}`,
        {
            title: blog.blogData.title,
            description: blog.blogData.description,
            category: blog.blogData.category,
        },
        config,
    );
    return response.data;
};

const deleteBlog = async (id) => {
    const response = await axios.delete(`${base_url}/blog/${id}`, config);
    return response.data;
};

const BlogsService = {
    getBlogs,
    createBlog,
    getABlog,
    updateBlog,
    deleteBlog,
};

export default BlogsService;
