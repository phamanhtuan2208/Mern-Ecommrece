import axios from 'axios';
import { base_url } from '@/Utils/base_url';

const getEnquiry = async () => {
    const response = await axios.get(`${base_url}/enquiry`);
    return response.data;
};

const EnquiryService = {
    getEnquiry,
};

export default EnquiryService;
