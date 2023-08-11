import React, { useEffect } from 'react';
import Container from '~/Components/Container';
import BreadCrumb from '~/Components/BreadCrumb';
import Meta from '~/Components/Meta';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProductWishList } from '~/features/User/userSlice';
import { addToWishList } from '~/features/Product/productSlice';

const Wishlist = () => {
    const dispatch = useDispatch();

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

    const removeFromWishList = (id) => {
        dispatch(addToWishList(id));
        setTimeout(() => {
            dispatch(getUserProductWishList());
        }, 500);
    };

    return (
        <>
            <Meta title={'Wishlist'}></Meta>
            <BreadCrumb title={'Wishlist'}></BreadCrumb>
            <Container class1="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        {wishlistState.length === 0 && (
                            <div className="text-center fs-3">No Data</div>
                        )}
                        {wishlistState?.map((item, index) => {
                            return (
                                <div className="col-3" key={index}>
                                    <div className="wishlist-card w-100 position-relative">
                                        <img
                                            onClick={() => {
                                                removeFromWishList(item?._id);
                                            }}
                                            className="position-absolute cross img-fluid"
                                            src="images/cross.svg"
                                            alt="cross"
                                        ></img>
                                        <div className="wishlist-card-image bg-white">
                                            <img
                                                src={
                                                    item?.images[0]?.url
                                                        ? item?.images[0]?.url
                                                        : 'images/watch.jpg'
                                                }
                                                alt="watch"
                                                className="img-fluid w-100 d-block mx-auto"
                                                width={160}
                                            ></img>
                                        </div>
                                        <div className="py-3 px-3">
                                            <h5 className="title">
                                                {item?.title}
                                            </h5>
                                            <h6 className="price">
                                                $ {item?.price}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Wishlist;
