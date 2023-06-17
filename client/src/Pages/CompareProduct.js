import React from 'react';
import Color from '~/Components/Color';
import BreadCrumb from '~/Components/BreadCrumb';
import Meta from '~/Components/Meta';
import Container from '~/Components/Container';

const CompareProduct = () => {
    return (
        <>
            <Meta title={'Compare Products'}></Meta>
            <BreadCrumb title={'Compare Products'}></BreadCrumb>
            <Container class1="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    className="position-absolute cross img-fluid"
                                    src="images/cross.svg"
                                    alt="cross"
                                ></img>
                                <div className="product-card-image">
                                    <img
                                        src="images/watch.jpg"
                                        alt="watch"
                                    ></img>
                                    <div className="compare-product-detail">
                                        <h5 className="title">
                                            Ea magna et proident sunt ipsum
                                            nulla nisi proident velit cupidatat
                                            sunt.
                                        </h5>
                                        <h6 className="price mb-3">$100</h6>
                                        <div>
                                            <div className="product-detail">
                                                <h5>Brand: </h5>
                                                <p>Havels</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Type: </h5>
                                                <p>Watch</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Availablity: </h5>
                                                <p>In Stock</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Color: </h5>
                                                <Color></Color>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Size: </h5>
                                                <div className="d-flex gap-10">
                                                    <p>S</p>
                                                    <p>M</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    className="position-absolute cross img-fluid"
                                    src="images/cross.svg"
                                    alt="cross"
                                ></img>
                                <div className="product-card-image">
                                    <img
                                        src="images/watch.jpg"
                                        alt="watch"
                                    ></img>
                                    <div className="compare-product-detail">
                                        <h5 className="title">
                                            Ea magna et proident sunt ipsum
                                            nulla nisi proident velit cupidatat
                                            sunt.
                                        </h5>
                                        <h6 className="price mb-3">$100</h6>
                                        <div>
                                            <div className="product-detail">
                                                <h5>Brand: </h5>
                                                <p>Havels</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Type: </h5>
                                                <p>Watch</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Availablity: </h5>
                                                <p>In Stock</p>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Color: </h5>
                                                <Color></Color>
                                            </div>
                                            <div className="product-detail">
                                                <h5>Size: </h5>
                                                <div className="d-flex gap-10">
                                                    <p>S</p>
                                                    <p>M</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CompareProduct;
