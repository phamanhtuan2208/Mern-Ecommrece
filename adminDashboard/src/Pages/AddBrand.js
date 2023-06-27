import CustomInput from '@/Components/CustomInput';
import React from 'react';

const AddBrand = () => {
    return (
        <>
            <h3 className="mb-4 title">Add Brand</h3>
            <div>
                <form>
                    <CustomInput type="text" label="Enter Brand"></CustomInput>
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        Add Brand
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddBrand;
