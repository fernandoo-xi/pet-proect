import React, { FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';


const RequireAuth:FC = ( { children }: any  ) => {
    const location = useLocation();
    const token = localStorage.getItem('user');

    if (!token) return <Navigate to="/sign-in" state={{ from: location }} />;
    return children;
};

export default RequireAuth;