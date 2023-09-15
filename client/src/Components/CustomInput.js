import React from 'react';

const CustomInput = (props) => {
    const {
        type,
        name,
        placeholder,
        className,
        value,
        onChange,
        onBlur,
        disabled,
    } = props;
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
                    disabled={disabled}
                ></input>
            </div>
        </>
    );
};

export default CustomInput;
