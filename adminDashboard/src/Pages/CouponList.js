import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { getCoupon } from '@/Features/Coupon/CouponSlice';

const CouponList = () => {
    const columns = [
        {
            title: 'Sno',
            dataIndex: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
        },
        {
            title: 'Time Expire',
            dataIndex: 'timeexpire',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCoupon());
    }, [dispatch]);

    const couponState = useSelector((state) => state.coupon.coupons);

    const data1 = [];
    for (let i = 0; i < couponState.length; i++) {
        data1.push({
            key: i + 1,
            name: couponState[i].name,
            discount: couponState[i].discount + '%',
            timeexpire: new Date(couponState[i].expiry).toLocaleString(),
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
            <h3 className="mb-4 title">Coupon List</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default CouponList;
