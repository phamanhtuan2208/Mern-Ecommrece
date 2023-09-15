import React, { useState } from 'react';
import BreadCrumb from '~/Components/BreadCrumb';
import Container from '~/Components/Container';
import Meta from '~/Components/Meta';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateAProfile } from '~/features/User/userSlice';
import { FiEdit } from 'react-icons/fi';

const Profile = () => {
    const [edit, setEdit] = useState(true);

    const dispatch = useDispatch();

    const userLocalStore = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null;

    const updateProfile = yup.object({
        firstname: yup.string().required('First Name is require'),
        lastname: yup.string().required('Last Name is require'),
        email: yup.string().required('Email is require'),
        mobile: yup.string().required('Mobile is require'),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: userLocalStore?.firstname
                ? userLocalStore?.firstname
                : '',
            lastname: userLocalStore?.lastname ? userLocalStore?.lastname : '',
            email: userLocalStore?.email ? userLocalStore?.email : '',
            mobile: userLocalStore?.mobile ? userLocalStore?.mobile : '',
        },
        validationSchema: updateProfile,
        onSubmit: (values) => {
            dispatch(updateAProfile(values));
            setEdit(false);
        },
    });

    return (
        <>
            <Meta title={'My Profile'}></Meta>
            <BreadCrumb title={'My Profile'}></BreadCrumb>
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3 className="my-3">Update Profile</h3>
                            <FiEdit
                                className="fs-3"
                                onClick={() => setEdit(!edit)}
                                style={{ cursor: 'pointer' }}
                            ></FiEdit>
                        </div>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">
                                First Name
                            </label>
                            <input
                                disabled={edit}
                                name="firstname"
                                type="text"
                                className="form-control"
                                id="firstName"
                                aria-describedby="emailHelp"
                                value={formik.values.firstname}
                                onChange={formik.handleChange('firstname')}
                                onBlur={formik.handleBlur('firstname')}
                            />
                        </div>

                        <div className="error">
                            {formik.touched.firstname &&
                                formik.errors.firstname}
                        </div>
                        <br></br>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">
                                Last Name
                            </label>
                            <input
                                disabled={edit}
                                name="lastname"
                                type="text"
                                className="form-control"
                                id="lastName"
                                aria-describedby="emailHelp"
                                value={formik.values.lastname}
                                onChange={formik.handleChange('lastname')}
                                onBlur={formik.handleBlur('lastname')}
                            />
                        </div>

                        <div className="error">
                            {formik.touched.lastname && formik.errors.lastname}
                        </div>
                        <br></br>
                        <div className="mb-3">
                            <label htmlFor="EmailA" className="form-label">
                                Email Address
                            </label>
                            <input
                                disabled={edit}
                                name="email"
                                type="email"
                                className="form-control"
                                id="EmailA"
                                value={formik.values.email}
                                onChange={formik.handleChange('email')}
                                onBlur={formik.handleBlur('email')}
                            />
                        </div>

                        <div className="error">
                            {formik.touched.email && formik.errors.email}
                        </div>
                        <br></br>
                        <div className="mb-3">
                            <label htmlFor="Mobile" className="form-label">
                                Mobile No
                            </label>
                            <input
                                disabled={edit}
                                name="mobile"
                                type="number"
                                className="form-control"
                                id="Mobile"
                                value={formik.values.mobile}
                                onChange={formik.handleChange('mobile')}
                                onBlur={formik.handleBlur('mobile')}
                            />
                        </div>

                        <div className="error">
                            {formik.touched.mobile && formik.errors.mobile}
                        </div>
                        <br></br>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={edit}
                        >
                            Submit Change
                        </button>
                    </form>
                </div>
            </Container>
        </>
    );
};

export default Profile;
