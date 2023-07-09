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
import { createBlog, resetState } from '@/Features/Blogs/BlogsSlice';
import { getBCategory } from '@/Features/BCategory/BCategorySlice';

const AddBlog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBCategory());
    }, [dispatch]);

    const newBlogs = useSelector((state) => state.blog);

    const { isSuccess, isError, isLoading, createdBlogs } = newBlogs;

    const imgUpload = useSelector((state) => state.upload.images);
    const bCategory = useSelector((state) => state.bCategory.BCategorys);

    useEffect(() => {
        if (isSuccess && createdBlogs) {
            toast.success('Blog Added Successfully!');
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [isSuccess, isError, isLoading, createdBlogs]);

    const img = [];
    imgUpload.forEach((i) => {
        img.push({
            public_id: i.public_id,
            url: i.url,
        });
    });

    useEffect(() => {
        formik.values.images = img;
    }, [img]);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            category: '',
            images: '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Blog is Required'),
            description: Yup.string().required('Description is Required'),
            category: Yup.string().required('Category is Required'),
        }),
        onSubmit: (values) => {
            dispatch(createBlog(values));
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState());
            }, 3000);
        },
    });

    return (
        <>
            <h3 className="mb-4 title">Add Blog</h3>
            <div className="">
                <form
                    action=""
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
                        onChange={formik.handleChange('description')}
                        value={formik.values.description}
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

                    <button className="btn btn-success border-0 rounded-3 my-5">
                        Add Blog
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddBlog;
