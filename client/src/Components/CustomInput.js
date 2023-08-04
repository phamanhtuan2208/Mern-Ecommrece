import React from 'react';

const CustomInput = (props) => {
    const { type, name, placeholder, className, value, onChange, onBlur } =
        props;
    return (
        <>
            <div className="">
                <input
                    className={`form-control ${className}`}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                ></input>
            </div>
        </>
    );
};

export default CustomInput;
