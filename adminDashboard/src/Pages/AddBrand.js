import CustomInput from '@/Components/CustomInput';
import {
    createBrand,
    getABrand,
    resetState,
    updateBrand,
} from '@/Features/Brands/BrandSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const AddBrand = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getBrandId = location.pathname.split('/')[3];

    const newBrand = useSelector((state) => state.brand);

    const {
        isSuccess,
        isError,
        isLoading,
        createBrands,
        brandName,
        updatedBrand,
    } = newBrand;

    useEffect(() => {
        if (getBrandId !== undefined) {
            dispatch(getABrand(getBrandId));
            formik.values.title = brandName;
        } else {
            dispatch(resetState());
        }
    }, [brandName, dispatch, getBrandId]);

    useEffect(() => {
        if (isSuccess && createBrands) {
            toast.success(`Brand Add Successfully!`);
        }
        if (isSuccess && updatedBrand) {
            toast.success(`Brand Updated Successfully!`);
            navigate('/admin/list-brand');
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [isSuccess, isError, isLoading, createBrands, updatedBrand]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: brandName || '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Brand is Required'),
        }),
        onSubmit: (values) => {
            if (getBrandId !== undefined) {
                const data = { id: getBrandId, brandData: values };
                dispatch(updateBrand(data));
                dispatch(resetState());
            } else {
                dispatch(createBrand(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                }, 3000);
            }
        },
    });

    return (
        <>
            <h3 className="mb-4 title">
                {getBrandId !== undefined ? 'Edit' : 'Add'} Brand
            </h3>
            <div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="d-flex gap-3 flex-column"
                >
                    <CustomInput
                        type="text"
                        val={formik.values.title}
                        onCh={formik.handleChange('title')}
                        onBl={formik.handleBlur('title')}
                        label="Enter Brand"
                    ></CustomInput>
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        {getBrandId !== undefined ? 'Edit' : 'Add'} Brand
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddBrand;
