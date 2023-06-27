import CustomInput from '@/Components/CustomInput';
import React from 'react';


const AddColor = () => {
    return (
        <>
            <h3 className="mb-4 title">Add Color</h3>
            <div>
                <form>
                    <CustomInput type="color" label="Enter Color"></CustomInput>
                    <button className="btn btn-success border-0 rounded-3 my-5">
                        Add Color
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddColor;
