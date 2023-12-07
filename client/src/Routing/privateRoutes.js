import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const PrivateRoutes = ({ children }) => {
    const getTokenFromLocalStorage = JSON?.parse(localStorage?.getItem('user'));
    return getTokenFromLocalStorage?.token !== undefined ? (
        children
    ) : (
        <>
            <Navigate to={'/login'} replace={true}></Navigate>
            {toast.warning('You need to login First')}
        </>
    );
};
