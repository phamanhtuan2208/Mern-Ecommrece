import axios from 'axios';
import { base_url } from '@/Utils/base_url';
import { config } from '@/Utils/axiosConfig';

const getColors = async () => {
    const response = await axios.get(`${base_url}/color`);
    return response.data;
};

const createColors = async (color) => {
    const response = await axios.post(`${base_url}/color`, color, config);
    return response.data;
};

const ColorService = {
    getColors,
    createColors,
};

export default ColorService;
