import CustomInput from '@/Components/CustomInput';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import {
    createCoupon,
    getACoupon,
    resetState,
    updateCoupon,
} from '@/Features/Coupon/CouponSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const AddCoupon = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getCouponId = location.pathname.split('/')[3];

    const newCoupon = useSelector((state) => state.coupon);

    const {
        isSuccess,
        isError,
        isLoading,
        createCoupons,
        CouponDataName,
        CouponDataExpiry,
        updatedCoupon,
        CouponDataDiscount,
    } = newCoupon;

    useEffect(() => {
        if (getCouponId !== undefined) {
            dispatch(getACoupon(getCouponId));
            // formik.values.name = CouponDataName;
            // formik.values.expiry = CouponDataExpiry;
            // formik.values.discount = CouponDataDiscount;
        } else {
            dispatch(resetState());
        }
    }, [
        CouponDataDiscount,
        CouponDataExpiry,
        CouponDataName,
        dispatch,
        getCouponId,
    ]);

    useEffect(() => {
        if (isSuccess && createCoupons) {
            toast.success('Coupon Added Successfully!');
        }
        if (
            isSuccess &&
            CouponDataName &&
            CouponDataExpiry &&
            CouponDataDiscount
        ) {
            toast.success('Coupon Updated Successfully!');
            navigate('/admin/coupon-list');
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [isSuccess, isError, isLoading, createCoupons, updatedCoupon]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: CouponDataName || '',
            expiry: '',
            discount: CouponDataDiscount || '',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Coupon is Required'),
            expiry: Yup.string().required('Expiry is Required'),
            discount: Yup.string().required('Discount is Required'),
        }),
        onSubmit: (values) => {
            // if (getCouponId !== undefined) {
            //     const data = { id: getCouponId, brandData: values };
            //     dispatch(updateCoupon(data));
            //     dispatch(resetState());
            // } else {
            dispatch(createCoupon(values));
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState());
            }, 3000);
            // }
        },
    });

    return (
        <>
            <h3 className="mb-4 title">
                {getCouponId !== undefined ? 'Edit' : 'Add'} Coupon
            </h3>
            <div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="d-flex gap-3 flex-column"
                >
                    <CustomInput
                        type="text"
                        val={formik.values.name}
                        onCh={formik.handleChange('name')}
                        onBl={formik.handleBlur('name')}
                        label="Enter Coupon"
                    ></CustomInput>
                    <div className="error">
                        {formik.touched.name && formik.errors.name}
                    </div>
                    <CustomInput
                        type="date"
                        val={formik.values.expiry}
                        onCh={formik.handleChange('expiry')}
                        onBl={formik.handleBlur('expiry')}
                        label="Enter Expiry Data"
                    ></CustomInput>
                    <div className="error">
                        {formik.touched.expiry && formik.errors.expiry}
                    </div>
                    <CustomInput
                        type="number"
                        val={formik.values.discount}
                        onCh={formik.handleChange('discount')}
                        onBl={formik.handleBlur('discount')}
                        label="Enter Discount"
                    ></CustomInput>
                    <div className="error">
                        {formik.touched.discount && formik.errors.discount}
                    </div>
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        {getCouponId !== undefined ? 'Edit' : 'Add'} Coupon
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddCoupon;
