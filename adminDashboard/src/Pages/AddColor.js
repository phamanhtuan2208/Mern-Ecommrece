import CustomInput from '@/Components/CustomInput';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createColor } from '@/Features/Colors/ColorSlice';

const AddColor = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newColor = useSelector((state) => state.color);

    const { isSuccess, isError, isLoading, createdColors } = newColor;

    useEffect(() => {
        if (isSuccess && createdColors) {
            toast.success('Color Added Successfullly!');
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [isSuccess, isError, isLoading, createdColors]);

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Color is Required'),
        }),
        onSubmit: (values) => {
            dispatch(createColor(values));
            formik.resetForm();
            setTimeout(() => {
                navigate('/admin/list-color');
            }, 3000);
        },
    });
    return (
        <>
            <h3 className="mb-4 title">Add Color</h3>
            <div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="d-flex gap-3 flex-column"
                >
                    <CustomInput
                        label="Enter category"
                        val={formik.values.title}
                        onCh={formik.handleChange('title')}
                        onBl={formik.handleBlur('title')}
                        type="color"
                    ></CustomInput>
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        Add Color
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddColor;
