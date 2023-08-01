import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderByUser } from '@/Features/Auth/AuthSlice';
import { Link, useLocation } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const ViewOrder = () => {
    const location = useLocation();
    const userId = location.pathname.split('/')[3];

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
            title: 'Brand',
            dataIndex: 'brand',
        },
        {
            title: 'Count',
            dataIndex: 'count',
        },
        {
            title: 'Color',
            dataIndex: 'color',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderByUser(userId));
    }, [dispatch, userId]);

    const ordersState = useSelector(
        (state) => state.auth?.ordersByUser?.products,
    );

    console.log(ordersState);

    const data1 = [];
    for (let i = 0; i < ordersState?.length; i++) {
        data1.push({
            key: i + 1,
            name: ordersState[i].product.title,
            brand: ordersState[i].product.brand,
            count: ordersState[i].count,
            color: ordersState[i].product.color,
            amount: ordersState[i].product.price,
            date: ordersState[i].product.createdAt,

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
            <h3 className="mb-4 title">View Order</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default ViewOrder;
