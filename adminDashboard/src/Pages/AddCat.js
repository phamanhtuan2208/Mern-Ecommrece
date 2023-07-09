import CustomInput from '@/Components/CustomInput';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import {
    createCategory,
    resetState,
} from '@/Features/PCategory/PCategorySlice';

const AddCat = () => {
    const dispatch = useDispatch();

    const newCat = useSelector((state) => state.pCategory);

    const { isSuccess, isError, isLoading, createPCategorys } = newCat;

    useEffect(() => {
        if (isSuccess && createPCategorys) {
            toast.success('Category Added Successfully!');
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [isSuccess, isError, isLoading, createPCategorys]);

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Category is Required'),
        }),
        onSubmit: (values) => {
            dispatch(createCategory(values));
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState());
                
            }, 3000);
        },
    });
    return (
        <>
            <h3 className="mb-4 title">Add category</h3>
            <div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="d-flex gap-3 flex-column"
                >
                    <CustomInput
                        type="text"
                        label="Enter category"
                        val={formik.values.title}
                        onCh={formik.handleChange('title')}
                        onBl={formik.handleBlur('title')}
                    ></CustomInput>
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        Add category
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddCat;
