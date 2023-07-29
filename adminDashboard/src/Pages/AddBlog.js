import CustomInput from '@/Components/CustomInput';
import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Dropzone from 'react-dropzone';
import { deleteImg, uploadImg } from '@/Features/Upload/uploadSlice';
import {
    createBlog,
    getABlog,
    resetState,
    updateBlog,
} from '@/Features/Blogs/BlogsSlice';
import { getBCategory } from '@/Features/BCategory/BCategorySlice';
import { useLocation, useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getBlogId = location.pathname.split('/')[3];

    useEffect(() => {
        if (getBlogId !== undefined) {
            dispatch(getABlog(getBlogId));
        } else {
            dispatch(resetState());
        }
    }, [dispatch, getBlogId]);

    const newBlogs = useSelector((state) => state.blog);
    const imgUpload = useSelector((state) => state.upload.images);
    const bCategory = useSelector((state) => state.bCategory.BCategorys);

    const {
        isSuccess,
        isError,
        isLoading,
        createdBlogs,
        updatedBlog,
        blogName,
        blogDesc,
        blogCategory,
    } = newBlogs;

    useEffect(() => {
        if (isSuccess && createdBlogs) {
            toast.success('Blog Added Successfully!');
        }
        if (isSuccess && updatedBlog) {
            toast.success('Blog updated Successfully!');
            navigate(`/admin/blog-list`);
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [isSuccess, isError, isLoading, createdBlogs, updatedBlog, navigate]);

    const img = [];
    imgUpload.forEach((i) => {
        img.push({
            public_id: i.public_id,
            url: i.url,
        });
    });

    useEffect(() => {
        dispatch(resetState());
        dispatch(getBCategory());
    }, [dispatch]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: blogName || '',
            description: blogDesc || '',
            category: blogCategory || '',
            images: '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Blog is Required'),
            description: Yup.string().required('Description is Required'),
            category: Yup.string().required('Category is Required'),
        }),
        onSubmit: (values) => {
            if (getBlogId !== undefined) {
                const data = {
                    id: getBlogId,
                    blogData: values,
                };
                dispatch(updateBlog(data));
                dispatch(resetState());
            } else {
                dispatch(createBlog(values));
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
                {getBlogId !== undefined ? 'Edit' : 'Add'} Blog
            </h3>
            <div className="">
                <form
                    onSubmit={formik.handleSubmit}
                    className="d-flex gap-3 flex-column"
                >
                    <div className="mt-3">
                        <CustomInput
                            label="Enter Blog Title"
                            val={formik.values.title}
                            onCh={formik.handleChange('title')}
                            onBl={formik.handleBlur('title')}
                            type="text"
                        ></CustomInput>
                        <div className="error mt-3">
                            {formik.touched.title && formik.errors.title}
                        </div>
                    </div>
                    <select
                        className="form-control py-3 mb-3"
                        value={formik.values.category}
                        onChange={formik.handleChange('category')}
                        onBlur={formik.handleBlur('category')}
                    >
                        <option value={''}>Select Blog Category</option>
                        {bCategory.map((i, index) => {
                            return (
                                <option key={index} value={i.title}>
                                    {i.title}
                                </option>
                            );
                        })}
                    </select>
                    <div className="error">
                        {formik.touched.category && formik.errors.category}
                    </div>
                    <ReactQuill
                        theme="snow"
                        name="description"
                        onChange={formik?.handleChange('description')}
                        value={formik?.values?.description}
                    />
                    <div className="error">
                        {formik.touched.description &&
                            formik.errors.description}
                    </div>
                    <div className="bg-white border-1 p-5 text-center">
                        <Dropzone
                            onDrop={(acceptedFiles) =>
                                dispatch(uploadImg(acceptedFiles))
                            }
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>
                                            Drag 'n' drop some files here, or
                                            click to select files
                                        </p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                        <div className="showimages d-flex flex-wrap gap-3">
                            {imgUpload?.map((i, j) => {
                                return (
                                    <div key={j} className="position-relative">
                                        <button
                                            type={'button'}
                                            className="btn-close position-absolute"
                                            style={{
                                                top: '10px',
                                                right: '10px',
                                            }}
                                            onClick={() =>
                                                dispatch(deleteImg(i.public_id))
                                            }
                                        ></button>
                                        <img
                                            src={i.url}
                                            alt={'none'}
                                            width={200}
                                            height={200}
                                        ></img>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success border-0 rounded-3 my-5"
                    >
                        {getBlogId !== undefined ? 'Edit' : 'Add'} Blog
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddBlog;
