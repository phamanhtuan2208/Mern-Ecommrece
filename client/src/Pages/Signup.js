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
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Sign Up</h3>
                                <form
                                    action=""
                                    className="d-flex flex-column gap-30"
                                >
                                    <div className="">
                                        <input
                                            className="form-control"
                                            type={'text'}
                                            name="name"
                                            placeholder="Name"
                                        ></input>
                                    </div>
                                    <div className="">
                                        <input
                                            className="form-control"
                                            type={'email'}
                                            name="email"
                                            placeholder="Email"
                                        ></input>
                                    </div>
                                    <div className="">
                                        <input
                                            className="form-control"
                                            type={'text'}
                                            name="mobile"
                                            placeholder="Mobile Number"
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
                                        <div className=" mt-3 d-flex justify-content-center gap-20 align-items-center">
                                            <button className="button border-0 m-3">
                                                SignUp
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
