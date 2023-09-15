import React from 'react';
import { Link } from 'react-router-dom';
import Container from '~/Components/Container';
import BreadCrumb from '~/Components/BreadCrumb';
import Meta from '~/Components/Meta';
import CustomInput from '~/Components/CustomInput';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { ForgotPass } from '~/features/User/userSlice';

const ForgotPassword = () => {
    const dispatch = useDispatch();

    const ForgotPasswordYup = yup.object({
        email: yup.string().required('Email is require'),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
        },
        validationSchema: ForgotPasswordYup,
        onSubmit: (values) => {
            dispatch(ForgotPass(values));
        },
    });

    return (
        <>
            <Meta title={'Forgot Password'}></Meta>
            <BreadCrumb title={'Forgot Password'}></BreadCrumb>
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">
                                    Reset Your Password
                                </h3>
                                <p className="text-center my-2 mb-3">
                                    We will send you an email to reset your
                                    password
                                </p>
                                <form
                                    onSubmit={formik.handleSubmit}
                                    action=""
                                    className="d-flex flex-column gap-30"
                                >
                                    <CustomInput
                                        className="form-control"
                                        type={'email'}
                                        name="email"
                                        placeholder="Email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange('email')}
                                        onBlur={formik.handleBlur('email')}
                                    ></CustomInput>
                                    <div className="error">
                                        {formik.touched.email &&
                                            formik.errors.email}
                                    </div>
                                    <div>
                                        <div className=" mt-3 d-flex justify-content-center gap-20 align-items-center flex-column">
                                            <button
                                                className="button border-0 mb-3"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                            <Link to={'/login'}>Cancel</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ForgotPassword;
