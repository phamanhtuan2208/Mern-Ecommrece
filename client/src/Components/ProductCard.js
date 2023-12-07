import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation, useNavigate } from 'react-router-dom';
//import img
import ProductCompare from '~/images/prodcompare.svg';
import Wish from '~/images/wish.svg';
// import Wishlist from '~/images/wishlist.svg';
import AddCart from '~/images/add-cart.svg';
import View from '~/images/view.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '~/features/Product/productSlice';
import { PrivateRoutes } from '~/Routing/privateRoutes';
import { toast } from 'react-toastify';
import { getUserProductWishList } from '~/features/User/userSlice';

const ProductCard = (props) => {
    const [WishChange, setWishChange] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { grid, data } = props;

    const addToWishListState = (id) => {
        dispatch(addToWishList(id));
    };

    let location = useLocation();

    const checkPrivate = () => {
        if (!localStorage?.getItem('user')) {
            navigate('/login');
            toast.warning('You need to login First');
        }
    };

    useEffect(() => {
        getWishlistFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getWishlistFromDB = () => {
        dispatch(getUserProductWishList());
    };

    const wishlistState = useSelector(
        (state) => state?.auth?.wishlist?.wishlist,
    );
    console.log(wishlistState);

    return (
        <>
            {data?.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={`"col-3" ${
                            location.pathname === '/store'
                                ? `gr-${grid}`
                                : 'col-3'
                        }`}
                    >
                        <div className="product-card position-relative">
                            <div
                                className="wishlist-icon position-absolute"
                                onclick={checkPrivate}
                            >
                                <button
                                    className="border-0 bg-transparent"
                                    onClick={() => {
                                        checkPrivate();
                                        addToWishListState(item?._id);
                                    }}
                                >
                                    <img src={Wish} alt="wishlist"></img>
                                </button>
                            </div>
                            <div className="action-bar position-absolute">
                                <div className="d-flex flex-column gap-15">
                                    <Link to={`/store/product/${item?._id}`}>
                                        <button className="border-0 bg-transparent">
                                            <img src={View} alt="view"></img>
                                        </button>
                                    </Link>
                                    <button className="border-0 bg-transparent">
                                        <img
                                            src={ProductCompare}
                                            alt="compare"
                                        ></img>
                                    </button>
                                    <button className="border-0 bg-transparent">
                                        <img src={AddCart} alt="addcart"></img>
                                    </button>
                                </div>
                            </div>
                            <Link to={`/store/product/${item?._id}`}>
                                <div>
                                    <div className="product-image">
                                        <img
                                            src={item?.images[0]?.url}
                                            className="img-fluid mx-auto"
                                            width={160}
                                            alt="ProductImage"
                                        ></img>
                                        <img
                                            src={item?.images[1]?.url}
                                            className="img-fluid mx-auto"
                                            width={160}
                                            alt="ProductImage"
                                        ></img>
                                    </div>
                                    <div className="product-details">
                                        <h6 className="brand">{item?.brand}</h6>
                                        <h5 className="product-title">
                                            {item?.title}
                                        </h5>
                                        <ReactStars
                                            count={5}
                                            // onChange={ratingChanged}
                                            size={24}
                                            value={item?.totalRatings.toString()}
                                            activeColor="#ffd700"
                                            edit={false}
                                        />
                                        <p
                                            className={`description ${
                                                grid === 12
                                                    ? 'd-block'
                                                    : 'd-none'
                                            }`}
                                            dangerouslySetInnerHTML={{
                                                __html: item?.description,
                                            }}
                                        ></p>
                                        <p className="price">$ {item?.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ProductCard;
