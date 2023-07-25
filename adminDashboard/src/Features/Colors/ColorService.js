import axios from 'axios';
import { base_url } from '@/Utils/base_url';
import { config } from '@/Utils/axiosConfig';

const getColors = async (Data) => {
    const response = await axios.get(`${base_url}/color`, Data);
    return response.data;
};

const getAColors = async (colorId) => {
    const response = await axios.get(`${base_url}/color/${colorId}`, config);
    return response.data;
};

const createColors = async (color) => {
    const response = await axios.post(`${base_url}/color`, color, config);
    return response.data;
};

const deleteColors = async (colorId) => {
    const response = await axios.delete(`${base_url}/color/${colorId}`, config);
    return response.data;
};

const editColor = async (color) => {
    const response = await axios.put(
        `${base_url}/color/${color.id}`,
        { title: color.colorName.title },
        config,
    );
    return response.data;
};

const ColorService = {
    getAColors,
    getColors,
    createColors,
    deleteColors,
    editColor,
};

export default ColorService;
