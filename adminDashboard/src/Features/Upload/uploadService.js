import axios from 'axios';
import { base_url } from '@/Utils/base_url';
import { config } from '@/Utils/axiosConfig';

const uploadImg = async (dataImg) => {
    const response = await axios.post(
        `${base_url}/upload/upload`,
        dataImg,
        config,
    );
    return response.data;
};

const deleteImg = async (id) => {
    const response = await axios.delete(
        `${base_url}/upload/deleteimg/${id}`,
        config,
    );
    return response.data;
};

const uploadService = {
    uploadImg,
    deleteImg,
};

export default uploadService;
