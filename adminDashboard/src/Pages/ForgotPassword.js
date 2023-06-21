import CustomInput from '@/Components/CustomInput';
import React from 'react';

const ForgotPassword = () => {
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
                <form action="">
                    <CustomInput
                        label="Email Address"
                        i_id="email"
                        i_class
                        type="text"
                    ></CustomInput>
                    <button
                        style={{ background: '#ffd333' }}
                        className="border-0 px-3 py-2 text-white fw-bold w-100"
                        type="submit"
                    >
                        Send Link
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
