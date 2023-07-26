import CustomInput from '@/Components/CustomInput';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import {
    createBCategory,
    editBCategory,
    getABCategory,
    resetState,
} from '@/Features/BCategory/BCategorySlice';
import { useLocation, useNavigate } from 'react-router-dom';

const AddBlogcat = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getBlogCatId = location.pathname.split('/')[3];

    const newBlogCat = useSelector((state) => state.bCategory);

    const {
        isSuccess,
        isError,
        isLoading,
        createdBCategorys,
        editedBCategory,
        BCategoryName,
    } = newBlogCat;

    useEffect(() => {
        if (getBlogCatId !== undefined) {
            dispatch(getABCategory(getBlogCatId));
            formik.values.title = BCategoryName;
        } else {
            dispatch(resetState());
        }
    }, [dispatch, BCategoryName, getBlogCatId]);

    useEffect(() => {
        if (isSuccess && createdBCategorys) {
            toast.success('Blog Category Added Successfully!');
        }
        if (isSuccess && editedBCategory) {
            toast.success('Color Updated Successfully!');
            navigate('/admin/blog-category-list');
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [
        isSuccess,
        isError,
        isLoading,
        createdBCategorys,
        editedBCategory,
        navigate,
    ]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: BCategoryName || '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Blog Category is Required'),
        }),
        onSubmit: (values) => {
            if (getBlogCatId !== undefined) {
                const data = {
                    id: getBlogCatId,
                    BCategoryName: values,
                };
                dispatch(editBCategory(data));
                dispatch(resetState());
            } else {
                dispatch(createBCategory(values));
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
                {getBlogCatId !== undefined ? 'Edit' : 'Add'} Blog Category
            </h3>
            <div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="d-flex gap-3 flex-column"
                >
                    <CustomInput
                        type="text"
                        label="Enter Blog Category"
                        val={formik.values.title}
                        onCh={formik.handleChange('title')}
                        onBl={formik.handleBlur('title')}
                    ></CustomInput>
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        {getBlogCatId !== undefined ? 'Edit' : 'Add'} Blog
                        Category
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddBlogcat;
