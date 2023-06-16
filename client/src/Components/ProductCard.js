import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
//import img
import ProductCompare from '../images/prodcompare.svg';
import Wish from '../images/wish.svg';
import Wishlist from '../images/wishlist.svg';
import Watch from '../images/watch.jpg';
import Watch2 from '../images/watch-1.avif';
import AddCart from '../images/add-cart.svg';
import View from '../images/view.svg';

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div
                className={`"col-3" ${
                    location.pathname === '/store' ? `gr-${grid}` : 'col-3'
                }`}
            >
                <Link
                    to={'/store/product/:id'}
                    className="product-card position-relative"
                >
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={Wish} alt="wishlist"></img>
                        </button>
                    </div>
                    <div className="product-image">
                        <img
                            src={Watch}
                            className="img-fluid"
                            alt="ProductImage"
                        ></img>
                        <img
                            src={Watch2}
                            className="img-fluid"
                            alt="ProductImage"
                        ></img>
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for
                            students
                        </h5>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            value={3}
                            activeColor="#ffd700"
                            edit={false}
                        />
                        <p
                            className={`description ${
                                grid === 12 ? 'd-block' : 'd-none'
                            }`}
                        >
                            Commodo nostrud excepteur velit amet officia do
                            cillum elit esse nisi Lorem sit sunt.
                        </p>

                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                                <img src={View} alt="view"></img>
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={ProductCompare} alt="compare"></img>
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={AddCart} alt="addcart"></img>
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div
                className={`"col-3" ${
                    location.pathname === '/store' ? `gr-${grid}` : 'col-3'
                }`}
            >
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={Wishlist} alt="wishlist"></img>
                        </button>
                    </div>
                    <div className="product-image">
                        <img
                            src={Watch}
                            className="img-fluid"
                            alt="ProductImage"
                        ></img>
                        <img
                            src={Watch2}
                            className="img-fluid"
                            alt="ProductImage"
                        ></img>
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk qwdqw 10 pack multi colored for
                            students
                        </h5>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            value={3}
                            activeColor="#ffd700"
                            edit={false}
                        />
                        <p
                            className={`description ${
                                grid === 12 ? 'd-block' : 'd-none'
                            }`}
                        >
                            Commodo nostrud excepteur velit amet officia do
                            cillum elit esse nisi Lorem sit sunt.
                        </p>

                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                                <img src={View} alt="view"></img>
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={ProductCompare} alt="compare"></img>
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={AddCart} alt={AddCart}></img>
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div
                className={`"col-3" ${
                    location.pathname === '/store' ? `gr-${grid}` : 'col-3'
                }`}
            >
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={Wish} alt="wishlist"></img>
                        </button>
                    </div>
                    <div className="product-image">
                        <img
                            src={Watch}
                            className="img-fluid"
                            alt="ProductImage"
                        ></img>
                        <img
                            src={Watch2}
                            className="img-fluid"
                            alt="ProductImage"
                        ></img>
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for
                            students
                        </h5>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            value={3}
                            activeColor="#ffd700"
                            edit={false}
                        />
                        <p
                            className={`description ${
                                grid === 12 ? 'd-block' : 'd-none'
                            }`}
                        >
                            Commodo nostrud excepteur velit amet officia do
                            cillum elit esse nisi Lorem sit sunt.
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                                <img src={View} alt="view"></img>
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={ProductCompare} alt="compare"></img>
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={AddCart} alt="addcart"></img>
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProductCard;
