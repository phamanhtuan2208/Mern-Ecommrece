import axios from 'axios';
import { base_url } from '@/Utils/base_url';
import { config } from '@/Utils/axiosConfig';

const getEnquiry = async () => {
    const response = await axios.get(`${base_url}/enquiry`);
    return response.data;
};

const deleteEnquiry = async (id) => {
    const response = await axios.delete(`${base_url}/enquiry/${id}`, config);
    return response.data;
};

const getAEnquiry = async (id) => {
    const response = await axios.get(`${base_url}/enquiry/${id}`, config);
    return response.data;
};

const updateEnquiry = async (enq) => {
    const response = await axios.put(
        `${base_url}/enquiry/${enq.id}`,
        { status: enq.enqData },
        config,
    );
    return response.data;
};

const EnquiryService = {
    getEnquiry,
    deleteEnquiry,
    getAEnquiry,
    updateEnquiry,
};

export default EnquiryService;
