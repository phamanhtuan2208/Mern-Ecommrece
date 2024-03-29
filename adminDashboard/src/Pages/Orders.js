import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '@/Features/Auth/AuthSlice';
import { Link } from 'react-router-dom';

const Orders = () => {
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
            title: 'Product',
            dataIndex: 'product',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    const ordersState = useSelector((state) => state?.auth?.orders);
    const data1 = [];
    for (let i = 0; i < ordersState?.length; i++) {
        data1.push({
            key: i + 1,
            name: ordersState[i].orderby.firstname,
            product: (
                <Link to={`/admin/orders/${ordersState[i].orderby._id}`}>
                    View Orders
                </Link>
            ),
            amount: ordersState[i].paymentIntent.amount,
            date: new Date(ordersState[i].createdAt).toLocaleString(),
        });
    }
    return (
        <div className="my-4">
            <h3 className="mb-4 title">Orders Categories</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default Orders;
