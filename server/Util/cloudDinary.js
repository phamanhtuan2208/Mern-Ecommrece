const cloudDinary = require('cloudinary');

cloudDinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudDinaryUploadImg = async (fileToUpload) => {
    return new Promise((resolve) => {
        cloudDinary.UploadStream.upload(fileToUpload, (result) => {
            resolve(
                { url: result.secure_url },
                {
                    resource_type: 'auto',
                },
            );
        });
    });
};

module.exports = cloudDinaryUploadImg;
