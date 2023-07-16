import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteBrand,
    getBrands,
    resetState,
} from '@/Features/Brands/BrandSlice';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import CustomModel from '@/Components/customModel';
import { useState } from 'react';

const BrandList = () => {
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

    const deleteBrands = (e) => {
        dispatch(deleteBrand(e));
        setOpen(false);
        
        setTimeout(() => {
            dispatch(getBrands());
        }, 1000);
    };

    useEffect(() => {
        dispatch(resetState());
        dispatch(getBrands());
    }, [dispatch]);


    const brandState = useSelector((state) => state.brand.brands);

    const data1 = [];
    for (let i = 0; i < brandState.length; i++) {
        data1.push({
            key: i + 1,
            title: brandState[i].title,
            action: (
                <>
                    <Link
                        to={`/admin/brand/${brandState[i]._id}`}
                        className="fs-3 text-danger"
                    >
                        <BiEdit />
                    </Link>
                    <button
                        onClick={() => showModal(brandState[i]._id)}
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
            <h3 className="mb-4 title">Brand List</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModel
                open={open}
                hideModal={hideModal}
                title="Are You sure you want to delete this brand?"
                performAction={() => deleteBrands(brandId)}
            ></CustomModel>
        </div>
    );
};

export default BrandList;
