import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';

const Signup = () => {
    return (
        <>
            <Meta title={'SignUp'}></Meta>
            <BreadCrumb title={'SignUp'}></BreadCrumb>
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Login</h3>
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
                                <div className="mt-1">
                                    <input
                                        className="form-control"
                                        type={'password'}
                                        name="password"
                                        placeholder="Password"
                                    ></input>
                                </div>
                                <div>
                                    <Link to={'/forgot-password'}>
                                        Forgot Password?
                                    </Link>

                                    <div className=" mt-3 d-flex justify-content-center gap-20 align-items-center">
                                        <button className="button border-0 m-3">
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
        </>
    );
};

export default Signup;
