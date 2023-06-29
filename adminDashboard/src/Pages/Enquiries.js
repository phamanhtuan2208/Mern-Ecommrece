import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getInquiry } from '@/Features/Enquiry/EnquirySlice';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const Enquiries = () => {
    const columns = [
        {
            title: 'SNo',
            dataIndex: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            // sorter: (a, b) => a.title.length - b.title.length,
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
        },
        {
            title: 'Comment',
            dataIndex: 'comment',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInquiry());
    }, [dispatch]);

    const InquiryState = useSelector((state) => state.enquiry.inquiries);

    const data1 = [];
    for (let i = 0; i < InquiryState.length; i++) {
        data1.push({
            key: i + 1,
            name: InquiryState[i].name,
            email: InquiryState[i].email,
            mobile: InquiryState[i].mobile,
            comment: InquiryState[i].comment,
            status: (
                <>
                    <select name="" className="form-control form-select" id="">
                        <option value={''}>Set Status</option>
                    </select>
                </>
            ),
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
            <h3 className="mb-4 title">Enquiries</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default Enquiries;
