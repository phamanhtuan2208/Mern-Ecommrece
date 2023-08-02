import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteBCategory,
    getBCategory,
    resetState,
} from '@/Features/BCategory/BCategorySlice';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import CustomModel from '@/Components/customModel';

const BlogCartList = () => {
    const [open, setOpen] = useState(false);
    const [BCategoryId, setBCategoryId] = useState('');
    const showModal = (e) => {
        setOpen(true);
        setBCategoryId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };

    const columns = [
        {
            title: 'Sno',
            dataIndex: 'key',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            sorter: (a, b) => a.title.length - b.title.length,
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const dispatch = useDispatch();

    const deletedColors = (e) => {
        dispatch(deleteBCategory(e));
        setOpen(false);

        setTimeout(() => {
            dispatch(getBCategory());
        }, 1000);
    };

    useEffect(() => {
        dispatch(resetState());
        dispatch(getBCategory());
    }, [dispatch]);

    const bCatStat = useSelector((state) => state.bCategory.BCategorys);

    const data1 = [];
    for (let i = 0; i < bCatStat.length; i++) {
        data1.push({
            key: i,
            title: bCatStat[i].title,
            action: (
                <>
                    <Link
                        to={`/admin/blog-category/${bCatStat[i]._id}`}
                        className="fs-3 text-danger"
                    >
                        <BiEdit />
                    </Link>
                    <button
                        onClick={() => showModal(bCatStat[i]._id)}
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
            <h3 className="mb-4 title">Blogs Categories</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModel
                title2="Confirmation"
                open={open}
                hideModal={hideModal}
                title="Are You sure you want to delete this Color?"
                performAction={() => deletedColors(BCategoryId)}
            ></CustomModel>
        </div>
    );
};

export default BlogCartList;
