import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, getBlogs, resetState } from '@/Features/Blogs/BlogsSlice';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import CustomModel from '@/Components/customModel';

const BlogList = () => {
    const [open, setOpen] = useState(false);
    const [Blog, setBlog] = useState('');
    const showModal = (e) => {
        setOpen(true);
        setBlog(e);
    };

    const hideModal = () => {
        setOpen(false);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'key',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            sorter: (a, b) => a.title.length - b.title.length,
        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const dispatch = useDispatch();

    const deletedBlog = (e) => {
        dispatch(deleteBlog(e));
        setOpen(false);

        setTimeout(() => {
            dispatch(getBlogs());
        }, 2000);
    };

    useEffect(() => {
        dispatch(resetState());
        dispatch(getBlogs());
    }, [dispatch]);

    const BlogsStat = useSelector((state) => state.blog.blogs);

    const data1 = [];
    for (let i = 0; i < BlogsStat.length; i++) {
        data1.push({
            key: i + 1,
            title: BlogsStat[i].title,
            category: BlogsStat[i].category,
            action: (
                <>
                    <Link
                        to={`/admin/blog-add/${BlogsStat[i]._id}`}
                        className="fs-3 text-danger"
                    >
                        <BiEdit />
                    </Link>
                    <button
                        onClick={() => showModal(BlogsStat[i]._id)}
                        className="ms-3 fs-3 text-danger bg-transparent border-0"
                    >
                        <AiFillDelete></AiFillDelete>
                    </button>
                </>
            ),
        });
    }
    return (
        <div className="my-4">
            <h3 className="mb-4 title">Blogs List</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModel
                open={open}
                hideModal={hideModal}
                title="Are You sure you want to delete this Color?"
                performAction={() => deletedBlog(Blog)}
            ></CustomModel>
        </div>
    );
};

export default BlogList;
