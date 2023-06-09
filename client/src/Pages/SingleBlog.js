import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const SingleBlog = () => {
    return (
        <div>
            <Meta title={'Dynamic Blog Name'}></Meta>
            <BreadCrumb title={'Dynamic Blog Name'}></BreadCrumb>
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link
                                    to={'/blog'}
                                    className="d-flex align-items-center gap-10"
                                >
                                    <HiOutlineArrowLeft className="fs-4"></HiOutlineArrowLeft>
                                    &nbsp;Go Back to Blogs
                                </Link>
                                <h3 className="title">
                                    Excepteur cillum nulla cillum laboris
                                    laborum dolore minim.
                                </h3>
                                <img src="images/blog-3.jpg" alt="blog"></img>
                                <p>
                                    Laborum labore eu ad velit dolore irure
                                    velit voluptate aute culpa proident do
                                    eiusmod. Velit anim voluptate dolor
                                    incididunt id dolor irure et qui ut non
                                    exercitation.Ad proident sit reprehenderit
                                    et ut sint dolor laboris cupidatat aliquip.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
