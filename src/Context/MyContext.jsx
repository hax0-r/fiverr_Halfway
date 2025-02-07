import React from 'react'
import { createContext, useState } from 'react';

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
    const [login, setLogin] = useState(false);


    const value = {
        login,
        setLogin
    }

    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    );
};