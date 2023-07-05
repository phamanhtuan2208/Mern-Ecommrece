const Product = require('../Models/productModel');
const AsyncHandler = require('express-async-handler');
const slugify = require('slugify');
const User = require('../Models/userModel');
const validateMongoDBid = require('../Util/validateMongodbld');
const {
    cloudDinaryUploadImg,
    cloudDinaryDeleteImg,
} = require('../Util/cloudDinary');
const fs = require('fs');

//create product
const createProduct = AsyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }
});

//update product
const updateProduct = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateProduct);
    } catch (error) {
        throw new Error(error);
    }
});
//delete product
const deleteProduct = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.json(deleteProduct);
    } catch (error) {
        throw new Error(error);
    }
});

//get all product
const getAllProduct = AsyncHandler(async (req, res) => {
    try {
        const queryObject = { ...req.query };

        //filter price gte|gt|lte|lt
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach((el) => delete queryObject[el]);
        let queryString = JSON.stringify(queryObject);
        queryString = queryString.replace(
            /\b(gte|gt|lte|lt)\b/g,
            (match) => `$${match}`,
        );
        let query = Product.find(JSON.parse(queryString));

        //Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        } else {
            query = query.sort('-createdAt');
        }

        //limiting the field
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        } else {
            query = query.select('-__v');
        }

        //pagination
        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount)
                throw new Error('This Page does not exists');
        }

        const product = await query;
        res.json(product);
    } catch (error) {
        throw new Error(error);
    }
});

//find a product
const getAProduct = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error);
    }
});

//add to wishlist
const addToWishList = AsyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { prodId } = req.body;
    try {
        const user = await User.findById(_id);
        const alreadyAdded = user.wishlist.find(
            (id) => id.toString() === prodId,
        );
        if (alreadyAdded) {
            let user = await User.findByIdAndUpdate(
                _id,
                {
                    $pull: { wishlist: prodId },
                },
                { new: true },
            );
            res.json(user);
        } else {
            let user = await User.findByIdAndUpdate(
                _id,
                {
                    $push: { wishlist: prodId },
                },
                { new: true },
            );
            res.json(user);
        }
    } catch (error) {
        throw new Error(error);
    }
});

//rating product
const Rating = AsyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { star, prodId, comment } = req.body;
    try {
        //rating user
        const product = await Product.findById(prodId);
        let alreadyRated = product.ratings.find(
            (userId) => userId.posterBy.toString() === _id.toString(),
        );
        if (alreadyRated) {
            const updateRating = await Product.updateOne(
                {
                    ratings: { $elemMatch: alreadyRated },
                },
                {
                    $set: {
                        'ratings.$.Star': star,
                        'ratings.$.Comment': comment,
                    },
                },
                {
                    new: true,
                },
            );
        } else {
            const rateProduct = await Product.findByIdAndUpdate(
                prodId,
                {
                    $push: {
                        ratings: {
                            Star: star,
                            Comment: comment,
                            posterBy: _id,
                        },
                    },
                },
                { new: true },
            );
        }
        //avg rating
        const getAllRatings = await Product.findById(prodId);
        let totalRating = getAllRatings.ratings.length;
        let ratingsSum = getAllRatings.ratings
            .map((item) => item.Star)
            .reduce((prev, curr) => prev + curr, 0);
        let actualRating = Math.round(ratingsSum / totalRating);
        let finalProduct = await Product.findByIdAndUpdate(
            prodId,
            {
                totalRatings: actualRating,
            },
            { new: true },
        );
        res.json(finalProduct);
    } catch (error) {
        throw new Error(error);
    }
});


module.exports = {
    createProduct,
    getAProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishList,
    Rating,
};
