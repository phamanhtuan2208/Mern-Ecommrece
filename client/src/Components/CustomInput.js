import React from 'react';

const CustomInput = (props) => {
    const { type, name, placeholder, className } = props;
    return (
        <>
            <div className="">
                <input
                    className={`form-control ${className}`}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                ></input>
            </div>
        </>
    );
};

export default CustomInput;
