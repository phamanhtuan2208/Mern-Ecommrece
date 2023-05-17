const AsyncHandler = require('express-async-handler');
const Blog = require('../Models/blogModel');
const User = require('../Models/userModel');
const validateMongoDBid = require('../Util/validateMongodbld');

//create new blog
const createBlog = AsyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.json({
            status: 'success',
            newBlog,
        });
    } catch (error) {
        throw new Error(error);
    }
});

//update blog
const updateBlog = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updateBlog = await Blog.findById(id, req.body, { new: true });
        res.json({
            status: 'success update',
            updateBlog,
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { createBlog, updateBlog };
