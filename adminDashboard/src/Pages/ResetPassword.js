import CustomInput from '@/Components/CustomInput';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from '@/Features/Auth/AuthSlice';

const ResetPassword = () => {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const idUser = location.pathname.split('/')[2];

    const newAuth = useSelector((state) => state.auth);

    const { isSuccessReset, isError, isLoading } = newAuth;

    useEffect(() => {
        if (isSuccessReset) {
            setTitle(
                'Your Password has been reset, you gonna return to login page after 2 second',
            );
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
        if (isError) {
            setTitle('Something went Wrong');
        }
        if (isLoading) {
            setTitle('');
        }
    }, [isError, isLoading, isSuccessReset, navigate]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            newpassword: '',
            confirm: '',
        },
        validationSchema: Yup.object().shape({
            newpassword: Yup.string('').required('New Password is Required'),
            confirm: Yup.string()
                .required('Passwords must match')
                .oneOf([Yup.ref('newpassword'), null], 'Passwords must match'),
        }),
        onSubmit: (values) => {
            const data = { id: idUser, password: values.confirm };
            dispatch(resetPassword(data));
        },
    });

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
                <h3 className="text-center">Reset Password</h3>
                <p className="text-center">Please Enter your new password</p>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        label="New password"
                        type="password"
                        onCh={formik.handleChange('newpassword')}
                        onBl={formik.handleBlur('newpassword')}
                        val={formik.values.newpassword}
                        i_id="password"
                        i_class={'abc'}
                    ></CustomInput>
                    <div className="error p-1">
                        {formik.touched.newpassword &&
                            formik.errors.newpassword}
                    </div>
                    <CustomInput
                        label="Confirm new password"
                        type="password"
                        onCh={formik.handleChange('confirm')}
                        onBl={formik.handleBlur('confirm')}
                        val={formik.values.confirm}
                        i_id="resetpassword"
                        i_class={'abc'}
                    ></CustomInput>
                    <div className="error p-2">
                        {formik.touched.confirm && formik.errors.confirm}
                    </div>
                    <button
                        style={{ background: '#ffd333' }}
                        className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
                        type="submit"
                    >
                        Reset Password
                    </button>
                    <div
                        className={`${
                            isSuccessReset === true ? 'green' : 'error'
                        } p-2`}
                    >
                        {title}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
