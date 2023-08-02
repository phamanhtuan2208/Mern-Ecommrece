import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteEnquiry,
    getInquiry,
    updateEnquiry,
} from '@/Features/Enquiry/EnquirySlice';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiOutlineEye } from 'react-icons/ai';
import CustomModel from '@/Components/customModel';

const Enquiries = () => {
    const [open, setOpen] = useState(false);
    const [EnqId, setEnqId] = useState('');
    const showModal = (e) => {
        setOpen(true);
        setEnqId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };

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
                    <select
                        name=""
                        defaultValue={
                            InquiryState[i].status
                                ? InquiryState[i].status
                                : 'Submitted'
                        }
                        className="form-control form-select"
                        id=""
                        onChange={(e) =>
                            setEnquiryStatus(
                                e.target.value,
                                InquiryState[i]._id,
                            )
                        }
                    >
                        <option value={'Submitted'}>Submitted</option>

                        <option value={'Contacted'}>Contacted</option>
                        <option value={'In Progress'}>In Progress</option>
                        <option value={'Resolved'}>Resolved</option>
                    </select>
                </>
            ),
            action: (
                <>
                    <Link
                        to={`/admin/enquiries/${InquiryState[i]._id}`}
                        className="fs-3 text-danger"
                    >
                        <AiOutlineEye />
                    </Link>
                    <button
                        onClick={() => showModal(InquiryState[i]._id)}
                        className="ms-3 fs-3 text-danger bg-transparent border-0"
                    >
                        <AiFillDelete></AiFillDelete>
                    </button>
                </>
            ),
        });
    }

    const setEnquiryStatus = (e, i) => {
        const data = { id: i, enqData: e };
        dispatch(updateEnquiry(data));
    };

    const deleteEnq = (e) => {
        dispatch(deleteEnquiry(e));
        setOpen(false);
        setTimeout(() => {
            dispatch(getInquiry());
        }, 2000);
    };

    return (
        <div className="my-4">
            <h3 className="mb-4 title">Enquiries</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModel
                title2="Confirmation"
                open={open}
                hideModal={hideModal}
                title="Are You sure you want to delete this enquiries?"
                performAction={() => deleteEnq(EnqId)}
            ></CustomModel>
        </div>
    );
};

export default Enquiries;
