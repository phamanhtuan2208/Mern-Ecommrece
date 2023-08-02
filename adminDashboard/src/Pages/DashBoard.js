import React, { useEffect } from 'react';
//react icons
import { BsArrowUpRight } from 'react-icons/bs';
//react ant charts
import { Column } from '@ant-design/plots';
//react ant table
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '@/Features/Auth/AuthSlice';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    const data = [
        {
            type: 'Jan',
            sales: Math.floor(Math.random() * 100),
        },
        {
            type: 'Feb',
            sales: Math.floor(Math.random() * 100),
        },
        {
            type: 'Mar',
            sales: Math.floor(Math.random() * 100),
        },
        {
            type: 'Apr',
            sales: Math.floor(Math.random() * 100),
        },
        {
            type: 'May',
            sales: Math.floor(Math.random() * 100),
        },
        {
            type: 'June',
            sales: Math.floor(Math.random() * 100),
        },
        {
            type: 'July',
            sales: Math.floor(Math.random() * 100),
        },
        {
            type: 'Aug',
            sales: Math.floor(Math.random() * 100),
        },
        {
            type: 'Sept',
            sales: Math.floor(Math.random() * 100),
        },
        {
            type: 'Oct',
            sales: Math.floor(Math.random() * 100),
        },
        {
            type: 'Nov',
            sales: Math.floor(Math.random() * 100),
        },
        {
            type: 'Dec',
            sales: Math.floor(Math.random() * 100),
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            position: 'middle',

            style: {
                fill: '#FFFFFF',
                opacity: 1,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: 'Month',
            },
            sales: {
                alias: 'Income',
            },
        },
        color: ({ type }) => {
            return '#ffd333';
        },
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

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var year = dateObj.getUTCFullYear();

    const dispatch = useDispatch();
    var totalPriceSell = 0;

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
        totalPriceSell += ordersState[i].paymentIntent.amount;
    }
    return (
        <div>
            <h3 className="mb-4 title">DashBoard</h3>
            <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
                    <div>
                        <p className="desc">Total</p>
                        <h4 className="mb-0 sub-title">${totalPriceSell}</h4>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <h6 className="green">
                            <BsArrowUpRight></BsArrowUpRight>
                            {Math.floor(Math.random() * 100)}%
                        </h6>
                        <p className="mb-0 desc">
                            Compared To {month} / {year}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-4 ">
                <h3 className="mb-5 title">Income Statics</h3>
                <div>
                    <Column {...config} />;
                </div>
            </div>
            <div className="mb-4 ">
                <h3 className="mb-5 title">Recent Orders</h3>
                <div>
                    <Table columns={columns} dataSource={data1} />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
