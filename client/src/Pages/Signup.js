import React from 'react';
import Container from '~/Components/Container';
import BreadCrumb from '~/Components/BreadCrumb';
import Meta from '~/Components/Meta';
import CustomInput from '~/Components/CustomInput';

const Signup = () => {
    return (
        <>
            <Meta title={'SignUp'}></Meta>
            <BreadCrumb title={'SignUp'}></BreadCrumb>
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Sign Up</h3>
                                <form
                                    action=""
                                    className="d-flex flex-column gap-30"
                                >
                                    <CustomInput
                                        className="form-control"
                                        type={'text'}
                                        name="name"
                                        placeholder="Name"
                                    ></CustomInput>

                                    <CustomInput
                                        className="form-control"
                                        type={'email'}
                                        name="email"
                                        placeholder="Email"
                                    ></CustomInput>

                                    <CustomInput
                                        className="form-control"
                                        type={'tel'}
                                        name="mobile"
                                        placeholder="Mobile Number"
                                    ></CustomInput>

                                    <div className="mt-1">
                                        <CustomInput
                                            className="form-control"
                                            type={'password'}
                                            name="password"
                                            placeholder="Password"
                                        ></CustomInput>
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
            </Container>
        </>
    );
};

export default Signup;
