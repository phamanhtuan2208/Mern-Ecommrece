import React from 'react';
import Container from '../Components/Container';
import BlogCard from '../Components/BlogCard';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';

const Blog = () => {
    return (
        <>
            <Meta title={'Blog'}></Meta>
            <BreadCrumb title={'Blog'}></BreadCrumb>
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3 ">
                                <h3 className="filter-title">
                                    Find By Categories
                                </h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <BlogCard></BlogCard>
                                </div>
                                <div className="col-6 mb-3">
                                    <BlogCard></BlogCard>
                                </div>
                                <div className="col-6 mb-3">
                                    <BlogCard></BlogCard>
                                </div>
                                <div className="col-6 mb-3">
                                    <BlogCard></BlogCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Blog;
