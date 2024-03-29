const AsyncHandler = require('express-async-handler');
const Blog = require('../Models/blogModel');
const User = require('../Models/userModel');
const validateMongoDBid = require('../Util/validateMongodbld');
const cloudDinaryUploadImg = require('../Util/cloudDinary');
const fs = require('fs');

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
    validateMongoDBid(id);
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json({
            status: 'success update',
            updatedBlog,
        });
    } catch (error) {
        throw new Error(error);
    }
});

//get Blog, update views
const getBlog = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDBid(id);

    try {
        const getBlog = await Blog.findById(id)
            .populate('likes')
            .populate('dislikes');
        const updateViews = await Blog.findByIdAndUpdate(
            id,
            {
                $inc: { numViews: 1 }, //up view +1 when fetch api
            },
            { new: true },
        );

        res.json(getBlog);
    } catch (error) {
        throw new Error(error);
    }
});

//get all Blog
const getAllBlog = AsyncHandler(async (req, res) => {
    try {
        const getAllBlog = await Blog.find();
        res.json(getAllBlog);
    } catch (error) {
        throw new Error(error);
    }
});

//delete blog
const deleteBlog = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDBid(id);
    try {
        const deleteBlog = await Blog.findOneAndDelete(id);
        res.json({
            status: 'success delete',
            deleteBlog,
        });
    } catch (error) {
        throw new Error(error);
    }
});

//like Blog
const likeBlog = AsyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongoDBid(blogId);

    //Find the blog which you want to be liked
    const blog = await Blog.findById(blogId);
    //Find the login user
    const loginUserId = req?.user?._id;
    //Find if the user has liked the blog
    const isLiked = blog?.isLiked;
    //Find the user if he disliked the blog
    const alreadyDisliked = blog?.dislikes?.find(
        (userId) => userId?.toString() === loginUserId?.toString(),
    );
    if (alreadyDisliked) {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: { dislikes: loginUserId },
                isDisliked: false,
            },
            { new: true },
        );
        res.json(blog);
    }
    if (isLiked) {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: { likes: loginUserId },
                isLiked: false,
            },
            { new: true },
        );
        res.json(blog);
    } else {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $push: { likes: loginUserId },
                isLiked: true,
            },
            { new: true },
        );
        res.json(blog);
    }
});

//dislike Blog
const disLikeBlog = AsyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongoDBid(blogId);

    //Find the blog which you want to be dislike
    const blog = await Blog.findById(blogId);
    //Find the login user
    const loginUserId = req?.user?._id;
    //Find if the user has Disliked the blog
    const isDisliked = blog?.isDisliked;
    //Find the user if he like the blog
    const alreadyLiked = blog?.likes?.find(
        (userId) => userId?.toString() === loginUserId?.toString(),
    );
    if (alreadyLiked) {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: { likes: loginUserId },
                isLiked: false,
            },
            { new: true },
        );
        res.json(blog);
    }
    if (isDisliked) {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull: { dislikes: loginUserId },
                isDisliked: false,
            },
            { new: true },
        );
        res.json(blog);
    } else {
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $push: { dislikes: loginUserId },
                isDisliked: true,
            },
            { new: true },
        );
        res.json(blog);
    }
});

//upload image
const uploadImage = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDBid(id);
    try {
        const uploader = await ((path) => cloudDinaryUploadImg(path, 'images'));
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newpath = await uploader(path);
            urls.push(newpath);
            fs.unlinkSync(path);
        }
        const findBlog = await Blog.findByIdAndUpdate(
            id,
            {
                images: urls.map((file) => {
                    return file;
                }),
            },
            { new: true },
        );
        res.json(findBlog);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createBlog,
    updateBlog,
    getBlog,
    getAllBlog,
    deleteBlog,
    likeBlog,
    disLikeBlog,
    uploadImage,
};
