import axios from 'axios';
import { config, base_url } from '~/Utils/axiosConfig';

const createContact = async (data) => {
    const responsive = axios.post(`${base_url}/enquiry`, data, config);
    return responsive;
};

export const contactService = {
    createContact,
};
