import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import BlogCard from '~/Components/BlogCard';
import ProductCard from '~/Components/ProductCard';
import SpecialProduct from '~/Components/SpecialProduct';
import Meta from '~/Components/Meta';
import Container from '~/Components/Container';
import { getAllBlogs } from '~/features/blogs/blogSlice';
import { useDispatch, useSelector } from 'react-redux';

// data
import { services } from '~/Utils/Data';
import * as moment from 'moment';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getBlogState();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getBlogState = () => {
        dispatch(getAllBlogs());
    };

    const blogsState = useSelector((state) => state?.blog?.BlogsData);

    return (
        <>
            <Meta title={'E Commerce App'}></Meta>
            <Container class1={'home-wrapper-1 py-5'}>
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative">
                            <img
                                src="images/main-banner-1.jpg"
                                alt="main banner"
                                className="img-fluid rounded-3"
                            ></img>
                            <div className="main-banner-content position-absolute">
                                <h4>SUPERCHARGED FOR PROS</h4>
                                <h5>iPad S13+ Pro</h5>
                                <p>From $999.00 or $41.62/mo</p>
                                <button className="button">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                            <div className="small-banner position-relative">
                                <img
                                    src="images/catbanner-01.jpg"
                                    alt="main banner"
                                    className="img-fluid rounded-3"
                                ></img>
                                <div className="small-banner-content position-absolute">
                                    <h4>Best Sake</h4>
                                    <h5>iPad S13+ Pro</h5>
                                    <p>
                                        From $999.00 <br /> or $41.62/mo
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img
                                    src="images/catbanner-02.jpg"
                                    alt="main banner"
                                    className="img-fluid rounded-3"
                                ></img>
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>Buy IPad Air</h5>
                                    <p>
                                        From $999.00 <br />
                                        or $41.62/mo
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img
                                    src="images/catbanner-03.jpg"
                                    alt="main banner"
                                    className="img-fluid rounded-3"
                                ></img>
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>Buy IPad Air</h5>
                                    <p>
                                        From $999.00 <br />
                                        or $41.62/mo
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img
                                    src="images/catbanner-04.jpg"
                                    alt="main banner"
                                    className="img-fluid rounded-3"
                                ></img>
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>Buy IPad Air</h5>
                                    <p>
                                        From $999.00 <br />
                                        or $41.62/mo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="home-wrapper-2 py-5">
                {' '}
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="service d-flex align-items-center justify-content-between">
                                {services?.map((data, index) => (
                                    <div
                                        className="d-flex align-items-center gap-15"
                                        key={index}
                                    >
                                        <img
                                            src={data.image}
                                            alt="services"
                                        ></img>
                                        <div>
                                            <h6>{data.title}</h6>
                                            <p className="mb-0">
                                                {data.tagline}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {/* <div className="d-flex align-items-center gap-15">
                                    <img
                                        src="images/service-02.png"
                                        alt="services"
                                    ></img>
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p className="mb-0">
                                            Save up to 25% off
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img
                                        src="images/service-03.png"
                                        alt="services"
                                    ></img>
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className="mb-0">
                                            Shop with an expert
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img
                                        src="images/service-04.png"
                                        alt="services"
                                    ></img>
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className="mb-0">
                                            Get Factory Default Price
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img
                                        src="images/service-05.png"
                                        alt="services"
                                    ></img>
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p className="mb-0">
                                            100% Protected Payment
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img
                                        src="images/camera.jpg"
                                        alt="Camera"
                                    ></img>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img
                                        src="images/camera.jpg"
                                        alt="Camera"
                                    ></img>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="Tv"></img>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img
                                        src="images/headphone.jpg"
                                        alt="headphone"
                                    ></img>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img
                                        src="images/camera.jpg"
                                        alt="Camera"
                                    ></img>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img
                                        src="images/camera.jpg"
                                        alt="Camera"
                                    ></img>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="Tv"></img>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img
                                        src="images/headphone.jpg"
                                        alt="headphone"
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="featured-wrapper py-5 home-wrapper-2">
                {' '}
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Featured Collections
                            </h3>
                        </div>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                    </div>
                </div>
            </Container>
            <Container class1="famous-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img
                                    src="images/famous-1.webp"
                                    alt="famous"
                                    className="img-fluid"
                                ></img>
                                <div className="famous-content position-absolute">
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch Series 7</h6>
                                    <p>From $399 or $16.62/mo . for 24mo.*</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img
                                    src="images/famous-2.webp"
                                    alt="famous"
                                    className="img-fluid"
                                ></img>
                                <div className="famous-content position-absolute">
                                    <h5 className="text-dark">
                                        Studio Display
                                    </h5>
                                    <h6 className="text-dark">
                                        600 nits of brightness
                                    </h6>
                                    <p className="text-dark">
                                        27-inch 5K Retina display
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img
                                    src="images/famous-3.webp"
                                    alt="famous"
                                    className="img-fluid"
                                ></img>
                                <div className="famous-content position-absolute">
                                    <h5 className="text-dark">Smartphone</h5>
                                    <h6 className="text-dark">
                                        Smartphone 13 Pro
                                    </h6>
                                    <p className="text-dark">
                                        Now in Green. From $999.00 or $41.62/mo
                                        .for 24 mo. Footnote*
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img
                                    src="images/famous-4.webp"
                                    alt="famous"
                                    className="img-fluid"
                                ></img>
                                <div className="famous-content position-absolute">
                                    <h5 className="text-dark">Home speaker</h5>
                                    <h6 className="text-dark">
                                        Room-filling sound
                                    </h6>
                                    <p className="text-dark">
                                        From $699 or $116.58/mo. for 12mo.*
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="special-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Special Product</h3>
                        </div>
                        <div className="row">
                            <SpecialProduct></SpecialProduct>
                            <SpecialProduct></SpecialProduct>
                            <SpecialProduct></SpecialProduct>
                            <SpecialProduct></SpecialProduct>
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
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                    </div>
                </div>
            </Container>
            <Container class1="marque-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className="d-flex">
                                    <div className="mx-4 w-25">
                                        {' '}
                                        <img
                                            src="images/brand-01.png"
                                            alt="Brand"
                                        ></img>
                                    </div>
                                    <div className="mx-4 w-25">
                                        {' '}
                                        <img
                                            src="images/brand-02.png"
                                            alt="Brand"
                                        ></img>
                                    </div>
                                    <div className="mx-4 w-25">
                                        {' '}
                                        <img
                                            src="images/brand-03.png"
                                            alt="Brand"
                                        ></img>
                                    </div>
                                    <div className="mx-4 w-25">
                                        {' '}
                                        <img
                                            src="images/brand-04.png"
                                            alt="Brand"
                                        ></img>
                                    </div>
                                    <div className="mx-4 w-25">
                                        {' '}
                                        <img
                                            src="images/brand-05.png"
                                            alt="Brand"
                                        ></img>
                                    </div>
                                    <div className="mx-4 w-25">
                                        {' '}
                                        <img
                                            src="images/brand-06.png"
                                            alt="Brand"
                                        ></img>
                                    </div>
                                    <div className="mx-4 w-25">
                                        {' '}
                                        <img
                                            src="images/brand-07.png"
                                            alt="Brand"
                                        ></img>
                                    </div>
                                    <div className="mx-4 w-25">
                                        {' '}
                                        <img
                                            src="images/brand-08.png"
                                            alt="Brand"
                                        ></img>
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="blog-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Latest Blogs
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        {blogsState &&
                            blogsState?.map((item, index) => {
                                if (index < 4) {
                                    return (
                                        <div className="col-3" key={index}>
                                            <BlogCard
                                                id={item?._id}
                                                title={item?.title}
                                                description={item?.description}
                                                image={item?.images[0]?.url}
                                                date={moment(
                                                    item?.createdAt,
                                                ).format(
                                                    'MMMM Do YYYY, h:mm a',
                                                )}
                                            ></BlogCard>
                                        </div>
                                    );
                                }
                            })}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;
