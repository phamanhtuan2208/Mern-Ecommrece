import React from 'react';
import Container from '~/Components/Container';
import BreadCrumb from '~/Components/BreadCrumb';
import Meta from '~/Components/Meta';
import CustomInput from '~/Components/CustomInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { ResetPass } from '~/features/User/userSlice';

const ResetPassword = () => {
    const location = useLocation();
    const getToken = location?.pathname?.split('/')[2];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signUpYup = yup.object({
        password: yup.string().required('Password is require'),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            password: '',
        },
        validationSchema: signUpYup,
        onSubmit: (values) => {
            dispatch(ResetPass({ token: getToken, password: values.password }));
        },
    });

    return (
        <>
            <Meta title={'Reset Password'}></Meta>
            <BreadCrumb title={'Reset Password'}></BreadCrumb>
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">
                                    Reset Password
                                </h3>
                                <form
                                    onSubmit={formik.handleSubmit}
                                    action=""
                                    className="d-flex flex-column gap-30"
                                >
                                    <CustomInput
                                        className="form-control"
                                        type={'password'}
                                        name="password"
                                        placeholder="Password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange(
                                            'password',
                                        )}
                                        onBlur={formik.handleBlur('password')}
                                    ></CustomInput>
                                    <div className="error">
                                        {formik.touched.password &&
                                            formik.errors.password}
                                    </div>
                                    <div>
                                        <div className=" mt-3 d-flex justify-content-center gap-20 align-items-center">
                                            <button className="button border-0 m-3">
                                                Ok
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

export default ResetPassword;
