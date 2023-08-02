import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteProductCategories,
    getPCategory,
    resetState,
} from '@/Features/PCategory/PCategorySlice';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import CustomModel from '@/Components/customModel';

const CategoryList = () => {
    const [open, setOpen] = useState(false);
    const [pCatId, setpCatId] = useState('');
    const showModal = (e) => {
        setOpen(true);
        setpCatId(e);
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
            title: 'Title',
            dataIndex: 'title',
            sorter: (a, b) => a.title.length - b.title.length,
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetState());
        dispatch(getPCategory());
    }, [dispatch]);

    const pCatState = useSelector((state) => state.pCategory.PCategorys);

    const data1 = [];
    for (let i = 0; i < pCatState.length; i++) {
        data1.push({
            key: i,
            title: pCatState[i].title,
            action: (
                <>
                    <Link
                        to={`/admin/category/${pCatState[i]._id}`}
                        className="fs-3 text-danger"
                    >
                        <BiEdit />
                    </Link>
                    <button
                        onClick={() => showModal(pCatState[i]._id)}
                        className="ms-3 fs-3 text-danger bg-transparent border-0"
                    >
                        <AiFillDelete></AiFillDelete>
                    </button>
                </>
            ),
        });
    }

    const deleteProductCategory = (e) => {
        dispatch(deleteProductCategories(e));
        setOpen(false);

        setTimeout(() => {
            dispatch(getPCategory());
        }, 1000);
    };

    return (
        <div className="my-4">
            <h3 className="mb-4 title">Category List</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModel
                title2="Confirmation"
                open={open}
                hideModal={hideModal}
                title="Are You sure you want to delete this product category?"
                performAction={() => deleteProductCategory(pCatId)}
            ></CustomModel>
        </div>
    );
};

export default CategoryList;
