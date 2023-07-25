import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import {
    getCoupon,
    deleteCoupon,
    resetState,
} from '@/Features/Coupon/CouponSlice';
import CustomModel from '@/Components/customModel';

const CouponList = () => {
    const [open, setOpen] = useState(false);
    const [brandId, setBrandId] = useState('');
    const showModal = (e) => {
        setOpen(true);
        setBrandId(e);
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
            dataIndex: 'expiry',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const dispatch = useDispatch();

    const deleteCoupons = (e) => {
        dispatch(deleteCoupon(e));
        setOpen(false);

        setTimeout(() => {
            dispatch(getCoupon());
        }, 1000);
    };

    useEffect(() => {
        dispatch(resetState());
        dispatch(getCoupon());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getCoupon());
    }, [dispatch]);

    const couponState = useSelector((state) => state.coupon.coupons);

    const data1 = [];
    for (let i = 0; i < couponState?.length; i++) {
        data1.push({
            key: i + 1,
            name: couponState[i].name,
            discount: couponState[i].discount + '%',
            expiry: new Date(couponState[i].expiry).toLocaleString(),
            action: (
                <>
                    <Link
                        to={`/admin/coupon-add/${couponState[i]._id}`}
                        className="fs-3 text-danger"
                    >
                        <BiEdit />
                    </Link>
                    <button
                        onClick={() => showModal(couponState[i]._id)}
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
            <h3 className="mb-4 title">Coupon List</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModel
                open={open}
                hideModal={hideModal}
                title="Are You sure you want to delete this brand?"
                performAction={() => deleteCoupons(brandId)}
            ></CustomModel>
        </div>
    );
};

export default CouponList;
