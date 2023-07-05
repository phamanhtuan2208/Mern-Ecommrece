const AsyncHandler = require('express-async-handler');
const {
    cloudDinaryUploadImg,
    cloudDinaryDeleteImg,
} = require('../Util/cloudDinary');
const fs = require('fs');

//upload image
const uploadImage = AsyncHandler(async (req, res) => {
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
        const images = urls.map((file) => {
            return file;
        });
        res.json(images);
    } catch (error) {
        throw new Error(error);
    }
});

//delete image
const deleteImage = AsyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = cloudDinaryDeleteImg(id, 'images');
        res.json({ message: 'Deleted' });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    uploadImage,
    deleteImage,
};
