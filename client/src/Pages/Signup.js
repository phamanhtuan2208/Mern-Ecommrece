import React from 'react';
import Container from '~/Components/Container';
import BreadCrumb from '~/Components/BreadCrumb';
import Meta from '~/Components/Meta';
import CustomInput from '~/Components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '~/features/User/userSlice';

const Signup = () => {
    const dispatch = useDispatch();

    const signUpYup = yup.object({
        firstname: yup.string().required('FirstName is require'),
        lastname: yup.string().required('LastName is require'),
        email: yup.string().required('Email is require'),
        mobile: yup.string().required('Mobile is require'),
        password: yup.string().required('Password is require'),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
        },
        validationSchema: signUpYup,
        onSubmit: (values) => {
            console.log(values);
            dispatch(registerUser(values));
        },
    });

    return (
        <>
            <Meta title={'SignUp'}></Meta>
            <BreadCrumb title={'SignUp'}></BreadCrumb>
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Sign Up</h3>
                                <form
                                    onSubmit={formik.handleSubmit}
                                    action=""
                                    className="d-flex flex-column gap-30"
                                >
                                    <CustomInput
                                        className="form-control"
                                        type={'text'}
                                        name="firstname"
                                        placeholder="First Name"
                                        value={formik.values.firstname}
                                        onChange={formik.handleChange(
                                            'firstname',
                                        )}
                                        onBlur={formik.handleBlur('firstname')}
                                    ></CustomInput>
                                    <div className="error">
                                        {formik.touched.firstname &&
                                            formik.errors.firstname}
                                    </div>
                                    <CustomInput
                                        className="form-control"
                                        type={'text'}
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange(
                                            'lastname',
                                        )}
                                        onBlur={formik.handleBlur('lastname')}
                                    ></CustomInput>
                                    <div className="error">
                                        {formik.touched.lastname &&
                                            formik.errors.lastname}
                                    </div>
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
                                    <CustomInput
                                        className="form-control"
                                        type={'tel'}
                                        name="mobile"
                                        placeholder="Mobile Number"
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange('mobile')}
                                        onBlur={formik.handleBlur('mobile')}
                                    ></CustomInput>
                                    <div className="error">
                                        {formik.touched.mobile &&
                                            formik.errors.mobile}
                                    </div>

                                    <div className="mt-1">
                                        <CustomInput
                                            className="form-control"
                                            type={'password'}
                                            name="password"
                                            placeholder="Password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange(
                                                'password',
                                            )}
                                            onBlur={formik.handleBlur(
                                                'password',
                                            )}
                                        ></CustomInput>
                                        <div className="error">
                                            {formik.touched.password &&
                                                formik.errors.password}
                                        </div>
                                    </div>
                                    <div>
                                        <div className=" mt-3 d-flex justify-content-center gap-20 align-items-center">
                                            <button className="button border-0 m-3">
                                                Sign Up
                                            </button>
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

export default Signup;
