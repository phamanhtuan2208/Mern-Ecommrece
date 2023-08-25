import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '~/Components/Container';
import BreadCrumb from '~/Components/BreadCrumb';
import Meta from '~/Components/Meta';
import CustomInput from '~/Components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '~/features/User/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const signUpYup = yup.object({
        email: yup.string().required('Email is require'),
        password: yup.string().required('Password is require'),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: signUpYup,
        onSubmit: (values) => {
            dispatch(loginUser(values));
            setTimeout(() => {
                if (authState.isSuccess) {
                    navigate('/');
                }
            }, 2000);
        },
    });

    return (
        <>
            <Meta title={'Login'}></Meta>
            <BreadCrumb title={'Login'}></BreadCrumb>
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Login</h3>
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
                                        <Link to={'/forgot-password'}>
                                            Forgot Password?
                                        </Link>

                                        <div className="mt-3 d-flex justify-content-center gap-20 align-items-center">
                                            <button
                                                className="button border-0 m-3"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                            <Link
                                                to={'/signup'}
                                                className="button signup"
                                            >
                                                SignUp
                                            </Link>
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

export default Login;
