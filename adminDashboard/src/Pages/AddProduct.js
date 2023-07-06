import CustomInput from '@/Components/CustomInput';
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '@/Features/Brands/BrandSlice';
import { getPCategory } from '@/Features/PCategory/PCategorySlice';
import Multiselect from 'react-widgets/Multiselect';
import 'react-widgets/styles.css';
import { getColors } from '@/Features/Colors/ColorSlice';
import Dropzone from 'react-dropzone';
import { deleteImg, uploadImg } from '@/Features/Upload/uploadSlice';
import { createProducts } from '@/Features/Product/ProductSlice';

const AddProduct = () => {
    const dispatch = useDispatch();
    const [Color, setColor] = useState([]);
    const [Images, setImages] = useState([]);

    useEffect(() => {
        dispatch(getBrands());
        dispatch(getPCategory());
        dispatch(getColors());
    }, [dispatch]);

    const brandState = useSelector((state) => state.brand.brands);
    const PCategoryState = useSelector((state) => state.pCategory.PCategorys);
    const ColorState = useSelector((state) => state.color.colors);
    const imgUpload = useSelector((state) => state.upload.images);

    const colors = [];
    ColorState.forEach((i) => {
        colors.push({
            _id: i._id,
            color: i.title,
        });
    });

    const img = [];
    imgUpload.forEach((i) => {
        img.push({
            public_id: i.public_id,
            url: i.url,
        });
    });

    console.log(img);

    useEffect(() => {
        formik.values.color = Color;
        formik.values.images = img;
    }, [Color, img]);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            brand: '',
            category: '',
            color: '',
            quantity: '',
            images: '',
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Title is Required'),
            description: Yup.string().required('Description is Required'),
            price: Yup.number().required('Price is Required'),
            brand: Yup.string().required('Brand is Required'),
            category: Yup.string().required('Category is Required'),
            color: Yup.array().required('Color is Required'),
            quantity: Yup.number().required('Quantity is Required'),
        }),
        onSubmit: (values) => {
            // alert(JSON.stringify(values));
            dispatch(createProducts(values));
        },
    });

    return (
        <>
            <h3 className="mb-4 title">Add Product</h3>
            <div className="">
                <form
                    action=""
                    onSubmit={formik.handleSubmit}
                    className="d-flex gap-3 flex-column"
                >
                    <CustomInput
                        type={'text'}
                        label="Enter Product List"
                        val={formik.values.title}
                        onCh={formik.handleChange('title')}
                        onBl={formik.handleBlur('title')}
                    ></CustomInput>
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <div className="mb-3">
                        <ReactQuill
                            theme="snow"
                            name="description"
                            onChange={formik.handleChange('description')}
                            value={formik.values.description}
                        />
                    </div>
                    <div className="error">
                        {formik.touched.description &&
                            formik.errors.description}
                    </div>
                    <CustomInput
                        type={'number'}
                        label="Enter Product Price"
                        val={formik.values.price}
                        onCh={formik.handleChange('price')}
                        onBl={formik.handleBlur('price')}
                    ></CustomInput>
                    <div className="error">
                        {formik.touched.price && formik.errors.price}
                    </div>
                    <select
                        className="form-control py-3 mb-3"
                        value={formik.values.brand}
                        onChange={formik.handleChange('brand')}
                        onBlur={formik.handleBlur('brand')}
                    >
                        <option>Select Brand</option>
                        {brandState.map((i, index) => {
                            return (
                                <option key={index} value={i.title}>
                                    {i.title}
                                </option>
                            );
                        })}
                    </select>
                    <div className="error">
                        {formik.touched.brand && formik.errors.brand}
                    </div>
                    <select
                        className="form-control py-3 mb-3"
                        value={formik.values.category}
                        onChange={formik.handleChange('category')}
                        onBlur={formik.handleBlur('category')}
                    >
                        <option value={''}>Select Category</option>
                        {PCategoryState.map((i, index) => {
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
                    <Multiselect
                        dataKey="id"
                        textField="color"
                        data={colors}
                        onChange={(e) => setColor(e)}
                    />
                    <div className="error">
                        {formik.touched.color && formik.errors.color}
                    </div>
                    <CustomInput
                        type={'number'}
                        label="Enter Product Quantity"
                        val={formik.values.quantity}
                        onCh={formik.handleChange('quantity')}
                        onBl={formik.handleBlur('quantity')}
                    ></CustomInput>
                    <div className="error">
                        {formik.touched.quantity && formik.errors.quantity}
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
                    </div>
                    <div className="showimages d-flex flex-wrap gap-3">
                        {imgUpload?.map((i, j) => {
                            return (
                                <div key={j} className="position-relative">
                                    <button
                                        type={'button'}
                                        className="btn-close position-absolute"
                                        style={{ top: '10px', right: '10px' }}
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
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        Add Product
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddProduct;
