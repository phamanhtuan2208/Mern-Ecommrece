import CustomInput from '@/Components/CustomInput';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
                <form action="">
                    <CustomInput
                        label="Email Address"
                        i_id="email"
                        i_class
                        type="text"
                    ></CustomInput>
                    <CustomInput
                        label="password"
                        i_id="pass"
                        i_class
                        type="password"
                    ></CustomInput>
                    <div className="mb-3 text-end">
                        <Link to={'/forgot-password'} className="">
                            Forgot Password?
                        </Link>
                    </div>
                    <Link
                        to={'/admin'}
                        style={{ background: '#ffd333' }}
                        className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
                        type="submit"
                    >
                        Login
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
