import React, { useEffect } from 'react';
import Container from '~/Components/Container';
import BlogCard from '~/Components/BlogCard';
import BreadCrumb from '~/Components/BreadCrumb';
import Meta from '~/Components/Meta';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '~/features/blogs/blogSlice';
import * as moment from 'moment';

const Blog = () => {
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
                                {blogsState &&
                                    blogsState?.map((item, index) => {
                                        return (
                                            <div
                                                className="col-6 mb-3"
                                                key={index}
                                            >
                                                <BlogCard
                                                    id={item?._id}
                                                    title={item?.title}
                                                    description={
                                                        item?.description
                                                    }
                                                    image={item?.images[0]?.url}
                                                    date={moment(
                                                        item?.createdAt,
                                                    ).format(
                                                        'MMMM Do YYYY, h:mm a',
                                                    )}
                                                ></BlogCard>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Blog;
