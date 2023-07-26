import CustomInput from '@/Components/CustomInput';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import {
    getAColor,
    createColor,
    editColors,
    resetState,
} from '@/Features/Colors/ColorSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const AddColor = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getColorId = location.pathname.split('/')[3];

    const newColor = useSelector((state) => state.color);

    const {
        isSuccess,
        isError,
        isLoading,
        createdColors,
        updatedColors,
        colorName,
    } = newColor;

    useEffect(() => {
        if (getColorId !== undefined) {
            dispatch(getAColor(getColorId));
            formik.values.title = colorName;
        } else {
            dispatch(resetState());
        }
    }, [colorName, dispatch, getColorId]);

    useEffect(() => {
        if (isSuccess && createdColors) {
            toast.success('Color Added Successfully!');
        }
        if (isSuccess && updatedColors) {
            toast.success('Color Updated Successfully!');
            navigate('/admin/list-color');
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [isSuccess, isError, isLoading, createdColors, updatedColors, navigate]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: colorName || '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Color is Required'),
        }),
        onSubmit: (values) => {
            if (getColorId !== undefined) {
                const data = {
                    id: getColorId,
                    colorName: values,
                };
                dispatch(editColors(data));
                dispatch(resetState());
            } else {
                dispatch(createColor(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                }, 2000);
            }
        },
    });
    return (
        <>
            <h3 className="mb-4 title">
                {getColorId !== undefined ? 'Edit' : 'Add'} Color
            </h3>
            <div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="d-flex gap-3 flex-column"
                >
                    <CustomInput
                        label="Enter category"
                        onCh={formik.handleChange('title')}
                        onBl={formik.handleBlur('title')}
                        val={formik.values.title}
                        type="color"
                    ></CustomInput>
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        {getColorId !== undefined ? 'Edit' : 'Add'} Color
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddColor;
