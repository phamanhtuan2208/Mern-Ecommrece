import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const ProductCart = () => {
    return (
        <>
            <div className="col-3">
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src="images/wish.svg" alt="wishlist"></img>
                        </Link>
                    </div>
                    <div className="product-image">
                        <img
                            src="images/watch.jpg"
                            className="img-fluid"
                            alt="ProductImage"
                        ></img>
                        <img
                            src="images/watch-1.avif"
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
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="images/view.svg" alt="view"></img>
                            </Link>
                            <Link>
                                <img
                                    src="images/prodcompare.svg"
                                    alt="compare"
                                ></img>
                            </Link>
                            <Link>
                                <img
                                    src="images/add-cart.svg"
                                    alt="addcart"
                                ></img>
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProductCart;
