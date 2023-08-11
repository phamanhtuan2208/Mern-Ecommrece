/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import BreadCrumb from '~/Components/BreadCrumb';
import Meta from '~/Components/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { BiInfoCircle } from 'react-icons/bi';
import Container from '~/Components/Container';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createQuery } from '~/features/contacts/contactSlice';

const Contact = () => {
    const dispatch = useDispatch();

    const contactSchema = yup.object({
        name: yup.string().required('Name is Required'),
        mobile: yup.string().required('Mobile Number is Require'),
        email: yup
            .string()
            .email('Email should be valid')
            .required('Email is Required'),
        comment: yup.string().required('Comment is Required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            email: '',
            comment: '',
        },
        validationSchema: contactSchema,
        onSubmit: (values) => {
            dispatch(createQuery(values));
        },
    });
    return (
        <>
            <Meta title={'Contact'}></Meta>
            <BreadCrumb title={'Contact'}></BreadCrumb>
            <Container class1="contact-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8581690910883!2d106.68427047592806!3d10.822164158346562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deb3ef536f31%3A0x8b7bb8b7c956157b!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBUUC5IQ00!5e0!3m2!1svi!2s!4v1686048953722!5m2!1svi!2s"
                                width="600"
                                height="450"
                                className="w-100 border-0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between">
                                <div>
                                    <h3 className="contact-title mb-4">
                                        Contact
                                    </h3>
                                    <form
                                        onSubmit={formik.handleSubmit}
                                        action=""
                                        className="d-flex flex-column gap-15"
                                    >
                                        <input
                                            className="form-control"
                                            type={'text'}
                                            placeholder="Name"
                                            name="name"
                                            onChange={formik.handleChange(
                                                'name',
                                            )}
                                            onBlur={formik.handleBlur('name')}
                                            value={formik.values.name}
                                        ></input>
                                        <div className="error">
                                            {formik.touched.name &&
                                                formik.errors.name}
                                        </div>
                                        <input
                                            className="form-control"
                                            type={'text'}
                                            placeholder="Email"
                                            name="email"
                                            onChange={formik.handleChange(
                                                'email',
                                            )}
                                            onBlur={formik.handleBlur('email')}
                                            value={formik.values.email}
                                        ></input>
                                        <div className="error">
                                            {formik.touched.email &&
                                                formik.errors.email}
                                        </div>
                                        <input
                                            className="form-control"
                                            type={'text'}
                                            placeholder="Phone Number"
                                            name="mobile"
                                            onChange={formik.handleChange(
                                                'mobile',
                                            )}
                                            onBlur={formik.handleBlur('mobile')}
                                            value={formik.values.mobile}
                                        ></input>
                                        <div className="error">
                                            {formik.touched.mobile &&
                                                formik.errors.mobile}
                                        </div>
                                        <div>
                                            <textarea
                                                name=""
                                                id=""
                                                cols={30}
                                                rows={4}
                                                className="w-100 form-control"
                                                placeholder="Comments"
                                                onChange={formik.handleChange(
                                                    'comment',
                                                )}
                                                onBlur={formik.handleBlur(
                                                    'comment',
                                                )}
                                                value={formik.values.comment}
                                            ></textarea>
                                            <div className="error">
                                                {formik.touched.comment &&
                                                    formik.errors.comment}
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                className="button border-0"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title mb-4">
                                        Get in touch with Us
                                    </h3>
                                    <div>
                                        <ul className="ps-0">
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <AiOutlineHome className="fs-5" />
                                                <address className="mb-0">
                                                    Hno: 277, Near IUH
                                                    University
                                                </address>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <BiPhoneCall className="fs-5" />
                                                <a href="tel: +91 8826495797">
                                                    +91 8826495797
                                                </a>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <AiOutlineMail className="fs-5" />
                                                <a href="mailto: lorem@gmail.com">
                                                    lorem@gmail.com
                                                </a>
                                            </li>
                                            <li className="mb-3 d-flex gap-15 align-items-center">
                                                <BiInfoCircle className="fs-5" />
                                                <p className="mb-0">
                                                    Monday - Friday 10 AM - 8 AM
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;
