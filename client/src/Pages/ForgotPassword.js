import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';

const ForgotPassword = () => {
    return (
        <>
            <Meta title={'Forgot Password'}></Meta>
            <BreadCrumb title={'Forgot Password'}></BreadCrumb>
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">
                                Reset Your Password
                            </h3>
                            <p className="text-center my-2 mb-3">
                                We will send you an email to reset your password
                            </p>
                            <form
                                action=""
                                className="d-flex flex-column gap-30"
                            >
                                <div className="">
                                    <input
                                        className="form-control"
                                        type={'email'}
                                        name="email"
                                        placeholder="Email"
                                    ></input>
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
        </>
    );
};

export default ForgotPassword;
