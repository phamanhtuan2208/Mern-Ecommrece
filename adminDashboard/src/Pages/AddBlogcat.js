import CustomInput from '@/Components/CustomInput';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createBCategory } from '@/Features/BCategory/BCategorySlice';

const AddBlogcat = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newBlogCat = useSelector((state) => state.bCategory);

    const { isSuccess, isError, isLoading, createdBCategorys } = newBlogCat;

    useEffect(() => {
        if (isSuccess && createdBCategorys) {
            toast.success('Blog Category Added Successfully!');
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [isSuccess, isError, isLoading, createdBCategorys]);

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Blog Category is Required'),
        }),
        onSubmit: (values) => {
            dispatch(createBCategory(values));
            formik.resetForm();
            setTimeout(() => {
                navigate('/admin/blog-category-list');
            }, 3000);
        },
    });
    return (
        <>
            <h3 className="mb-4 title">Add Blog Category</h3>
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
                        Add Blog Category
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddBlogcat;
