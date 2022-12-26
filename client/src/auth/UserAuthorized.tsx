import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

// @ts-ignore
const UserAuthorized:FC = ({ children }) => {
    const token = localStorage.getItem('token');

    if (token) return <Navigate to="/" replace />;
    return children;
};

export default UserAuthorized;