import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BreadCrumb from '~/Components/BreadCrumb';
import Meta from '~/Components/Meta';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Blog from '~/images/blog-1.jpg';
import Container from '~/Components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getABlog } from '~/features/blogs/blogSlice';

const SingleBlog = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const getIdBlog = location.pathname.split('/')[2];

    useEffect(() => {
        getBlogState();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getBlogState = () => {
        dispatch(getABlog(getIdBlog));
    };

    const blogState = useSelector((state) => state?.blog?.singleBlog);

    return (
        <>
            <Meta title={blogState?.title}></Meta>
            <BreadCrumb title={blogState?.title}></BreadCrumb>
            <Container class1="blog-wrapper home-wrapper-2 py-5">
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
                                <h3 className="title">{blogState?.title}</h3>
                                <img
                                    src={
                                        blogState?.images[0]?.url
                                            ? blogState?.images[0]?.url
                                            : Blog
                                    }
                                    alt="blog"
                                ></img>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: blogState?.description,
                                    }}
                                ></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SingleBlog;
