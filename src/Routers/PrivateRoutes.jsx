import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const login = localStorage.getItem("Login");

    return login ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
