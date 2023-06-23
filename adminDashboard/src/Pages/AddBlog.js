import CustomInput from '@/Components/CustomInput';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddBlog = () => {
    const [desc, setDesc] = useState('');
    const handleDesc = (e) => {
        setDesc(e);
    };

    return (
        <>
            <h3 className="mb-4">Add Blog</h3>
            <div className="">
                <form action="">
                    <CustomInput
                        label="Enter Blog Title"
                        i_id
                        i_class
                        type="text"
                    ></CustomInput>
                    <select className="form-control py-3 mb-3">
                        <option value={''}>Select Blog Category</option>
                    </select>
                    <ReactQuill
                        theme="snow"
                        value={desc}
                        onChange={(e) => {
                            handleDesc(e);
                        }}
                    />
                    ;
                </form>
            </div>
        </>
    );
};

export default AddBlog;
