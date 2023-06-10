import React from 'react';
import ProductCart from '../Components/ProductCart';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';

const SingleProduct = () => {
    const [OrderedProduct, setOrderedProduct] = useState(true);
    const props = {
        width: 400,
        height: 500,
        zoomWidth: 500,
        img: 'https://www.dizo.net/img/qywdasb1.jpg',
    };
    return (
        <>
            <Meta title={'Product Name'}></Meta>
            <BreadCrumb title={'Product Name'}></BreadCrumb>
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl p-3 bg-white ">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div className="">
                                    <img
                                        src="https://www.dizo.net/img/qywdasb1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    ></img>
                                </div>
                                <div className="">
                                    <img
                                        src="https://www.dizo.net/img/qywdasb1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    ></img>
                                </div>
                                <div className="">
                                    <img
                                        src="https://www.dizo.net/img/qywdasb1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    ></img>
                                </div>
                                <div className="">
                                    <img
                                        src="https://www.dizo.net/img/qywdasb1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    ></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">
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
            <section className="reviews-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3>Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head">
                                    <div className="review-head d-flex justify-content-between align-items-end">
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
                                        {OrderedProduct && (
                                            <div>
                                                <a
                                                    className="text-dark text-decoration-underline"
                                                    href=""
                                                >
                                                    Write a Review
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    <div className="review-form py-4">
                                        <h4>Write a Review</h4>
                                        <form
                                            action=""
                                            className="d-flex flex-column gap-15"
                                        >
                                            <div>
                                                <ReactStars
                                                    count={5}
                                                    // onChange={ratingChanged}
                                                    size={24}
                                                    value={3}
                                                    activeColor="#ffd700"
                                                    edit={true}
                                                />
                                            </div>
                                            <div>
                                                <textarea
                                                    name=""
                                                    id=""
                                                    cols={30}
                                                    rows={4}
                                                    className="w-100 form-control"
                                                    placeholder="Comments"
                                                ></textarea>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <button className="button border-0">
                                                    Submit Review
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="reviews mt-4">
                                        <div className="review">
                                            <div className="d-flex gap-10 align-items-center">
                                                <h6 className="mb-0">
                                                    Some One Write A Comment
                                                </h6>
                                                <ReactStars
                                                    count={5}
                                                    // onChange={ratingChanged}
                                                    size={24}
                                                    value={3}
                                                    activeColor="#ffd700"
                                                    edit={false}
                                                />
                                            </div>
                                        </div>
                                        <p className="mt-3">
                                            Laborum cillum deserunt nulla minim
                                            nulla occaecat deserunt nulla
                                            commodo consequat ipsum. Laborum
                                            cillum deserunt nulla minim nulla
                                            occaecat deserunt nulla commodo
                                            consequat ipsum.
                                        </p>
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
