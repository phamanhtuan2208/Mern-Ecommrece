import axios from 'axios';
import { base_url } from '@/Utils/base_url';

const getUsers = async () => {
    const response = await axios.get(`${base_url}/user/getalluser`);
    return response.data;
};

const CustomerService = {
    getUsers,
};

export default CustomerService;
