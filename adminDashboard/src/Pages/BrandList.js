import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '@/Features/Brands/BrandSlice';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const BrandList = () => {
    const columns = [
        {
            title: 'Sno',
            dataIndex: 'key',
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands());
    }, [dispatch]);

    const brandState = useSelector((state) => state.brand.brands);

    console.log(brandState);

    const data1 = [];
    for (let i = 0; i < brandState.length; i++) {
        data1.push({
            key: i + 1,
            title: brandState[i].title,
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
            <h3 className="mb-4 title">Brand List</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default BrandList;
