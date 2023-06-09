import React from 'react';
import ProductCart from '../Components/ProductCart';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';

const SingleProduct = () => {
    const [OrderProduct, setOrderProduct] = useState(0);

    return (
        <>
            <Meta title={'Product Name'}></Meta>
            <BreadCrumb title={'Product Name'}></BreadCrumb>
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white p-3">
                                <h4>Description</h4>
                                <p>
                                    Adipisicing incididunt pariatur sunt
                                    adipisicing deserunt est eu ea laboris magna
                                    sunt. Adipisicing ex nisi deserunt nulla ut
                                    laborum ipsum sunt ipsum sit ullamco eu
                                    culpa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="review-head">
                                <div className="review-head d-flex justify-content-between align-items-center">
                                    <div>
                                        <h4 className="mb-3">
                                            Customer Reviews
                                        </h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                // onChange={ratingChanged}
                                                size={24}
                                                value={3}
                                                activeColor="#ffd700"
                                                edit={false}
                                            />
                                            <p className="mb-0">
                                                Based on 2 Reviews
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="">Write a Review</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Popular Products
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCart></ProductCart>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProduct;
