import CustomInput from '@/Components/CustomInput';
import { createBrand } from '@/Features/Brands/BrandSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddBrand = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newBrand = useSelector((state) => state.brand);

    const { isSuccess, isError, isLoading, createdBrand } = newBrand;

    useEffect(() => {
        if (isSuccess && createdBrand) {
            toast.success('Brand Added Successfullly!');
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [isSuccess, isError, isLoading, createdBrand]);

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Brand is Required'),
        }),
        onSubmit: (values) => {
            dispatch(createBrand(values));
            formik.resetForm();
            setTimeout(() => {
                navigate('/admin/list-brand');
            }, 3000);
        },
    });

    return (
        <>
            <h3 className="mb-4 title">Add Brand</h3>
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
                        Add Brand
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddBrand;
