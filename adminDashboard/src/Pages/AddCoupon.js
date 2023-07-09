import CustomInput from '@/Components/CustomInput';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { createCoupon, resetState } from '@/Features/Coupon/CouponSlice';

const AddCoupon = () => {
    const dispatch = useDispatch();

    const newCoupon = useSelector((state) => state.coupon);

    const { isSuccess, isError, isLoading, createCoupons } = newCoupon;

    useEffect(() => {
        if (isSuccess && createCoupons) {
            toast.success('Coupon Added Successfully!');
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [isSuccess, isError, isLoading, createCoupons]);

    const formik = useFormik({
        initialValues: {
            name: '',
            expiry: '',
            discount: '',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Coupon is Required'),
            expiry: Yup.string().required('Expiry is Required'),
            discount: Yup.string().required('Discount is Required'),
        }),
        onSubmit: (values) => {
            dispatch(createCoupon(values));
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState());
            }, 3000);
        },
    });

    return (
        <>
            <h3 className="mb-4 title">Add Coupon</h3>
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
                        Add Coupon
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddCoupon;
