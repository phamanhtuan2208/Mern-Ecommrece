import CustomInput from '@/Components/CustomInput';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import {
    createCategory,
    getAProductCategories,
    resetState,
    updateProductCategories,
} from '@/Features/PCategory/PCategorySlice';
import { useLocation, useNavigate } from 'react-router-dom';

const AddCat = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getPCatId = location.pathname.split('/')[3];

    const newCat = useSelector((state) => state.pCategory);

    const {
        isSuccess,
        isError,
        isLoading,
        createPCategorys,
        ProductCategoriesName,
        updatedProductsCategories,
    } = newCat;

    useEffect(() => {
        if (getPCatId !== undefined) {
            dispatch(getAProductCategories(getPCatId));
            formik.values.title = ProductCategoriesName;
        } else {
            dispatch(resetState());
        }
    }, [dispatch, getPCatId, ProductCategoriesName]);

    useEffect(() => {
        if (isSuccess && createPCategorys) {
            toast.success('Category Added Successfully!');
        }

        if (isSuccess && updatedProductsCategories) {
            toast.success(`Category Updated Successfully!`);
            navigate('/admin/list-category');
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [
        isSuccess,
        isError,
        isLoading,
        createPCategorys,
        updatedProductsCategories,
    ]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: ProductCategoriesName || '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Category is Required'),
        }),
        onSubmit: (values) => {
            if (getPCatId !== undefined) {
                const data = {
                    id: getPCatId,
                    updatedProductsCategories: values,
                };
                dispatch(updateProductCategories(data));
                dispatch(resetState());
            } else {
                dispatch(createCategory(values));
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
                {getPCatId !== undefined ? 'Edit' : 'Add'} category
            </h3>
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
                        {getPCatId !== undefined ? 'Edit' : 'Add'} category
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddCat;
