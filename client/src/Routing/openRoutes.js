import React from 'react';
import { Navigate } from 'react-router-dom';

export const OpenRoutes = ({ children }) => {
    const getTokenFromLocalStorage = JSON?.parse(localStorage?.getItem('user'));
    console.log(getTokenFromLocalStorage?.token);
    return getTokenFromLocalStorage?.token !== undefined ? (
        <Navigate to={'/'} replace={true}></Navigate>
    ) : (
        children
    );
};
