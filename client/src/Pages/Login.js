import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import CustomInput from '../Components/CustomInput';

const Login = () => {
    return (
        <>
            <Meta title={'Login'}></Meta>
            <BreadCrumb title={'Login'}></BreadCrumb>
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Login</h3>
                                <form
                                    action=""
                                    className="d-flex flex-column gap-30"
                                >
                                    <CustomInput
                                        className="form-control"
                                        type={'email'}
                                        name="email"
                                        placeholder="Email"
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
                                        <Link to={'/forgot-password'}>
                                            Forgot Password?
                                        </Link>

                                        <div className=" mt-3 d-flex justify-content-center gap-20 align-items-center">
                                            <button
                                                className="button border-0 m-3"
                                                type="submit"
                                            >
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
            </Container>
        </>
    );
};

export default Login;
