import CustomInput from '@/Components/CustomInput';
import { forgotPassword } from '@/Features/Auth/AuthSlice';
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

const ForgotPassword = () => {
    const [status, setStatus] = useState('');

    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
        },
        onSubmit: (values) => {
            setStatus('');
            dispatch(forgotPassword(values));
        },
    });

    const authForgotPassword = useSelector((state) => state.auth);

    const { isSuccess, isError } = authForgotPassword;

    useEffect(() => {
        if (isSuccess) {
            setStatus(
                'Your Link reset is send, check the email and change the password',
            );
        }
        if (isError) {
            setStatus(
                'Email is undefined, please check again your email want reset password',
            );
        }
    }, [isError, isSuccess]);

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
                <h3 className="text-center">Forgot Password?</h3>
                <p className="text-center">
                    Please Enter tour register email to get reset password mail.
                </p>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        label="Email Address"
                        type="text"
                        onCh={formik.handleChange('email')}
                        onBl={formik.handleBlur('email')}
                        val={formik.values.email}
                    ></CustomInput>
                    <div className="error p-2"></div>
                    <button
                        style={{ background: '#ffd333' }}
                        className="border-0 px-3 py-2 text-white fw-bold w-100"
                        type="submit"
                    >
                        Send Link
                    </button>
                    <div className={`${isSuccess ? 'green' : 'error'} p-2`}>
                        {status}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
