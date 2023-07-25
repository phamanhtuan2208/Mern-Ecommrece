import axios from 'axios';
import { base_url } from '@/Utils/base_url';
import { config } from '@/Utils/axiosConfig';

const getCoupons = async () => {
    const response = await axios.get(`${base_url}/coupon`, config);
    return response.data;
};

const createCoupons = async (coupon) => {
    const response = await axios.post(`${base_url}/coupon`, coupon, config);
    return response.data;
};

const getACoupon = async (id) => {
    const response = await axios.get(`${base_url}/coupon/${id}`, config);
    return response.data;
};

const deleteCoupon = async (id) => {
    const response = await axios.delete(`${base_url}/coupon/${id}`, config);
    return response.data;
};

const updateCoupons = async (coupon) => {
    const response = await axios.put(
        `${base_url}/Coupon/${coupon.id}`,
        { name: coupon.CouponDataName },
        { expiry: coupon.CouponDataExpiry },
        { discount: coupon.CouponDataDiscount },
        config,
    );
    return response.data;
};

const couponService = {
    getCoupons,
    createCoupons,
    getACoupon,
    deleteCoupon,
    updateCoupons,
};

export default couponService;
