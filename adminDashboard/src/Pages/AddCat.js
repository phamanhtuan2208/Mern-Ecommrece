import CustomInput from '@/Components/CustomInput';
import React from 'react';

const AddCat = () => {
    return (
        <>
            <h3 className="mb-4 title">Add category</h3>
            <div>
                <form>
                    <CustomInput
                        type="text"
                        label="Enter category"
                    ></CustomInput>
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        Add category
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddCat;
