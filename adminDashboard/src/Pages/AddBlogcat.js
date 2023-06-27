import CustomInput from '@/Components/CustomInput';
import React from 'react';

const AddBlogcat = () => {
    return (
        <>
            <h3 className="mb-4 title">Add Blog Category</h3>
            <div>
                <form>
                    <CustomInput
                        type="text"
                        label="Enter Blog Category"
                    ></CustomInput>
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        Add Blog Category
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddBlogcat;
