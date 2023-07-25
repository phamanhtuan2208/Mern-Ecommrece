import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
    getColors,
    deleteColors,
    resetState,
} from '@/Features/Colors/ColorSlice';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import CustomModel from '@/Components/customModel';

const ColorList = () => {
    const [open, setOpen] = useState(false);
    const [ColorId, setColorId] = useState('');
    const showModal = (e) => {
        setOpen(true);
        setColorId(e);
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

    const deletedColors = (e) => {
        dispatch(deleteColors(e));
        setOpen(false);

        setTimeout(() => {
            dispatch(getColors());
        }, 1000);
    };

    useEffect(() => {
        dispatch(resetState());
        dispatch(getColors());
    }, [dispatch]);

    const pColorState = useSelector((state) => state.color.colors);

    const data1 = [];
    for (let i = 0; i < pColorState?.length; i++) {
        data1.push({
            key: i,
            title: pColorState[i].title,
            action: (
                <>
                    <Link
                        to={`/admin/color/${pColorState[i]._id}`}
                        className="fs-3 text-danger"
                    >
                        <BiEdit />
                    </Link>
                    <button
                        onClick={() => showModal(pColorState[i]._id)}
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
            <h3 className="mb-4 title">Color List</h3>
            <div className="">
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModel
                open={open}
                hideModal={hideModal}
                title="Are You sure you want to delete this Color?"
                performAction={() => deletedColors(ColorId)}
            ></CustomModel>
        </div>
    );
};

export default ColorList;
