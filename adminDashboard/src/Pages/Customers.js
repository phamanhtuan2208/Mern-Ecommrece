import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '@/Features/Customers/CustomerSlice';

const Customers = () => {
    const columns = [
        {
            title: 'Sno',
            dataIndex: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
        },
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const customersState = useSelector((state) => state.customer.customers);

    const data1 = [];
    let a = 0;
    for (let i = 0; i < customersState.length; i++) {
        if (customersState[i].role !== 'admin') {
            data1.push({
                key: ++a,
                name:
                    customersState[i].firstname +
                    ' ' +
                    customersState[i].lastname,
                email: customersState[i].email,
                mobile: customersState[i].mobile,
            });
        }
    }

    return (
        <div className="my-4">
            <h3 className="mb-4 title">Customers</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default Customers;
