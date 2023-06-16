import React from 'react';
import Container from '../Components/Container';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';

const Wishlist = () => {
    return (
        <>
            <Meta title={'Wishlist'}></Meta>
            <BreadCrumb title={'Wishlist'}></BreadCrumb>
            <Container class1="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card w-100 position-relative">
                                <img
                                    className="position-absolute cross img-fluid"
                                    src="images/cross.svg"
                                    alt="cross"
                                ></img>
                                <div className="wishlist-card-image">
                                    <img
                                        src="images/watch.jpg"
                                        alt="watch"
                                        className="img-fluid w-100"
                                    ></img>
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">
                                        Nisi deserunt aliquip excepteur
                                        adipisicing incididunt nostrud et do
                                        reprehenderit.
                                    </h5>
                                    <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card w-100 position-relative">
                                <img
                                    className="position-absolute cross img-fluid"
                                    src="images/cross.svg"
                                    alt="cross"
                                ></img>
                                <div className="wishlist-card-image">
                                    <img
                                        src="images/watch.jpg"
                                        alt="watch"
                                        className="img-fluid w-100"
                                    ></img>
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">
                                        Nisi deserunt aliquip excepteur
                                        adipisicing incididunt nostrud et do
                                        reprehenderit.
                                    </h5>
                                    <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card w-100 position-relative">
                                <img
                                    className="position-absolute cross img-fluid"
                                    src="images/cross.svg"
                                    alt="cross"
                                ></img>
                                <div className="wishlist-card-image">
                                    <img
                                        src="images/watch.jpg"
                                        alt="watch"
                                        className="img-fluid w-100"
                                    ></img>
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">
                                        Nisi deserunt aliquip excepteur
                                        adipisicing incididunt nostrud et do
                                        reprehenderit.
                                    </h5>
                                    <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Wishlist;
