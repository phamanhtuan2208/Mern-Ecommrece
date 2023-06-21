import CustomInput from '@/Components/CustomInput';
import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
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
                <form action="">
                    <CustomInput
                        label="Old password"
                        i_id="password"
                        i_class
                        type="password"
                    ></CustomInput>
                    <CustomInput
                        label="New password"
                        i_id="password"
                        i_class
                        type="password"
                    ></CustomInput>
                    <CustomInput
                        label="Confirm new password"
                        i_id="password"
                        i_class
                        type="password"
                    ></CustomInput>
                    <Link
                        to={'/admin'}
                        style={{ background: '#ffd333' }}
                        className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
                        type="submit"
                    >
                        Reset
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
