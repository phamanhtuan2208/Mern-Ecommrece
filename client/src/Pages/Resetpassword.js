import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';

const Resetpassword = () => {
    return (
        <>
            <Meta title={'Reset Password'}></Meta>
            <BreadCrumb title={'Reset Password'}></BreadCrumb>
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">
                                    Reset Password
                                </h3>
                                <form
                                    action=""
                                    className="d-flex flex-column gap-30"
                                >
                                    <div className="">
                                        <input
                                            className="form-control"
                                            type={'password'}
                                            name="password"
                                            placeholder="Password"
                                        ></input>
                                    </div>
                                    <div className="">
                                        <input
                                            className="form-control"
                                            type={'password'}
                                            name="confassword"
                                            placeholder="Confirm Password"
                                        ></input>
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
            </div>
        </>
    );
};

export default Resetpassword;
