import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import Watch from '../images/watch.jpg';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <Meta title={'Cart'}></Meta>
            <BreadCrumb title={'Cart'}></BreadCrumb>
            <section className="cart-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header d-flex justify-content-between align-items-center">
                                <h4 className="cart-col-1">Product</h4>
                                <h4 className="cart-col-2">Price</h4>
                                <h4 className="cart-col-3">Quantity</h4>
                                <h4 className="cart-col-4">Total</h4>
                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img
                                            src={Watch}
                                            alt="productImage"
                                            className="img-fluid"
                                        ></img>
                                    </div>
                                    <div className="w-75">
                                        <p>ffwfwaf</p>
                                        <p>Size: aaa</p>
                                        <p>Color: ggg1</p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">$100</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center">
                                    <div>
                                        <input
                                            className="form-control"
                                            type={'number'}
                                            name=""
                                            id=""
                                            min={1}
                                            max={10}
                                        ></input>
                                    </div>
                                    <div>
                                        &nbsp;{' '}
                                        <AiFillDelete className="text-danger"></AiFillDelete>
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">$100</h5>
                                </div>
                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img
                                            src={Watch}
                                            alt="productImage"
                                            className="img-fluid"
                                        ></img>
                                    </div>
                                    <div className="w-75">
                                        <p>ffwfwaf</p>
                                        <p>Size: aaa</p>
                                        <p>Color: ggg1</p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">$100</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center">
                                    <div>
                                        <input
                                            className="form-control"
                                            type={'number'}
                                            name=""
                                            id=""
                                            min={1}
                                            max={10}
                                        ></input>
                                    </div>
                                    <div>
                                        &nbsp;{' '}
                                        <AiFillDelete className="text-danger"></AiFillDelete>
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">$100</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-2 mt-4">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <Link className="button" to={'/product'}>
                                    Continue To shopping
                                </Link>

                                <div className="d-flex align-items-end flex-column">
                                    <h4>Subtotal: $1000</h4>
                                    <p>
                                        Taxes and shipping calculated at
                                        checkout
                                    </p>
                                    <Link to={'/checkout'} className="button">
                                        Checkout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;
