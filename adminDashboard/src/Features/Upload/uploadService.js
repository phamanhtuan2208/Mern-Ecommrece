import axios from 'axios';
import { base_url } from '@/Utils/base_url';
import { config } from '@/Utils/axiosConfig';

const uploadImg = async (data) => {
    const response = await axios.post(`${base_url}/upload`, data, config);
    return response.data;
};

const uploadService = {
    uploadImg,
};

export default uploadService;
