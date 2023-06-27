import CustomInput from '@/Components/CustomInput';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/Features/Auth/AuthSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email('Email Should be valid')
                .required('Email is Required'),
            password: Yup.string().required('Password is Required'),
        }),
        onSubmit: (values) => {
            dispatch(login(values));
            alert(JSON.stringify(values, null, 2));
        },
    });
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth,
    );
    useEffect(() => {
        if (!user == null || isSuccess) {
            navigate('admin');
        } else {
            alert('not');
        }
    }, [user, isLoading, isError, isSuccess, message]);
    return (
        <div
            className="py-4"
            style={{ background: '#ffd333', minHeight: '100vh' }}
        >
            <div
                className="w-25 bg-white rounded-3 mx-auto p-4"
                style={{
                    position: 'absolute',
                    top: '48%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <h3 className="text-center">Login</h3>
                <p className="text-center">Login to your account to continue</p>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        name="email"
                        label="Email Address"
                        i_id="email"
                        i_class
                        type="text"
                        val={formik.values.email}
                        onCh={formik.handleChange('email')}
                    ></CustomInput>
                    <div className="error">
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <CustomInput
                        name="password"
                        label="password"
                        i_id="pass"
                        i_class
                        type="password"
                        val={formik.values.password}
                        onCh={formik.handleChange('password')}
                    ></CustomInput>
                    <div className="error">
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="mb-3 text-end">
                        <Link to={'/forgot-password'} className="">
                            Forgot Password?
                        </Link>
                    </div>
                    <button
                        style={{ background: '#ffd333' }}
                        className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
