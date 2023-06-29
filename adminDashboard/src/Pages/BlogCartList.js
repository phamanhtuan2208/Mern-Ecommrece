import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getBCategory } from '@/Features/BCategory/BCategorySlice';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const BlogCartList = () => {
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

    useEffect(() => {
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
                    <Link to="" className="fs-3 text-danger">
                        <BiEdit />
                    </Link>
                    <Link to={''} className="ms-3 fs-3 text-danger">
                        <AiFillDelete></AiFillDelete>
                    </Link>
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
        </div>
    );
};

export default BlogCartList;
