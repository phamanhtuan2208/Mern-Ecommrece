import React from 'react';
import { Table } from 'antd';

const Enquiries = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'Key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Product',
            dataIndex: 'address',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
    ];
    const data1 = [];
    for (let i = 0; i < 46; i++) {
        data1.push({
            key: i,
            name: `Edward King ${i}`,
            product: 32,
            status: `London, Park Lane no. ${i}`,
        });
    }
    return (
        <div className="my-4">
            <h3 className="mb-4">Enquiries</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default Enquiries;
