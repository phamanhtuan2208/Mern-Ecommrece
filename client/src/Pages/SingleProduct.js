/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import ProductCard from '~/Components/ProductCard';
import BreadCrumb from '~/Components/BreadCrumb';
import Meta from '~/Components/Meta';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import Color from '~/Components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '~/Components/Container';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAProduct } from '~/features/Product/productSlice';
import { toast } from 'react-toastify';
import { addProdToCart } from '~/features/User/userSlice';

const SingleProduct = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const getProductId = location.pathname.split('/')[3];
    const [OrderedProduct, setOrderedProduct] = useState(true);
    const [ColorP, setColor] = useState(null);
    const [Quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(getAProduct(getProductId));
    }, [dispatch, getProductId]);

    const copyToClipboard = (text) => {
        console.log('text', text);
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    };

    const productState = useSelector((state) => state?.product?.SingleProduct);

    const cartData = {
        productId: productState?._id,
        quantity: Quantity,
        color: ColorP,
        price: productState?.price,
    };

    const upLoadCart = () => {
        if (ColorP === null) {
            toast.error('Please Choose the Color');
            return false;
        } else {
            dispatch(addProdToCart(cartData));
        }
    };

    const props = {
        width: 400,
        height: 600,
        zoomWidth: 600,
        img: `${productState?.images[0]?.url}`,
    };

    return (
        <>
            <Meta title={'Product Name'}></Meta>
            <BreadCrumb title={'Product Name'}></BreadCrumb>
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl p-3 bg-white ">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                {productState?.images.map((items, index) => {
                                    return (
                                        <div className="" key={index}>
                                            <img
                                                src={items?.url}
                                                className="img-fluid"
                                                alt=""
                                            ></img>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className="title">
                                        {productState?.title}
                                    </h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">
                                        $ {productState?.price}
                                    </p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            // onChange={ratingChanged}
                                            size={24}
                                            value={3}
                                            activeColor="#ffd700"
                                            edit={false}
                                        />
                                        <p className="mb-0 t-review">
                                            (2 Reviews)
                                        </p>
                                    </div>
                                    <a href="#review" className="review-btn">
                                        Write a Review
                                    </a>
                                </div>
                                <div className="py-3">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Type:{' '}
                                        </h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Brand:
                                        </h3>
                                        <p className="product-data">
                                            {productState?.brand}
                                        </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Category:
                                        </h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Tag:
                                        </h3>
                                        <p className="product-data">
                                            {' '}
                                            {productState?.tags}
                                        </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">
                                            Availability:
                                        </h3>
                                        <p className="product-data">
                                            {productState?.category}
                                        </p>
                                    </div>

                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className="product-heading">
                                            Size:
                                        </h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                S
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                M
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                XL
                                            </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                XXL
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className="product-heading">
                                            Color:
                                        </h3>
                                        <Color
                                            colorData={productState?.color}
                                            setColor={setColor}
                                        ></Color>
                                    </div>
                                    <div className="d-flex align-items-center gap-15 align-items-center my-2 flex-row mb-3">
                                        <h3 className="product-heading">
                                            Quantity:
                                        </h3>
                                        <div className="">
                                            <input
                                                className="form-control"
                                                type={'number'}
                                                name=""
                                                id=""
                                                style={{ width: '70px' }}
                                                min={1}
                                                max={10}
                                                defaultValue={1}
                                                onChange={(e) =>
                                                    setQuantity(e.target.value)
                                                }
                                                value={Quantity}
                                            ></input>
                                        </div>
                                        <div className="d-flex align-items-center gap-30 ms-5">
                                            <button
                                                className="button border-0 m-3"
                                                type="submit"
                                                onClick={() => {
                                                    upLoadCart();
                                                }}
                                            >
                                                Add to Cart
                                            </button>
                                            <button className="button signup">
                                                Buy It Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                        <div>
                                            <a href="">
                                                <TbGitCompare className="fs-5 me-2"></TbGitCompare>{' '}
                                                Add to Compare
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <AiOutlineHeart className="fs-5 me-2"></AiOutlineHeart>
                                                Add to Wishlist
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-3">
                                        <h3 className="product-heading">
                                            Shipping & Return:
                                        </h3>
                                        <p className="product-data">
                                            Free shipping and returns available
                                            on all orders! We ship all US
                                            domestic orders within
                                            <b> 5-10 business </b>
                                            days!
                                        </p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-3">
                                        <h3 className="product-heading">
                                            Product Link:
                                        </h3>
                                        <a
                                            onClick={() =>
                                                copyToClipboard(
                                                    window.location.href,
                                                )
                                            }
                                            href={'javascript:void(0)'}
                                        >
                                            Copy Product Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: productState?.description,
                                    }}
                                ></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="reviews-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 id="review">Reviews</h3>
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
                                                    value={
                                                        productState?.totalRatings
                                                    }
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
            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Popular Products
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard></ProductCard>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SingleProduct;
