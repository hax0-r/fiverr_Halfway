import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {

    const login = localStorage.getItem('Login')
    
  return (
    <div>
        {login ? <Outlet/> : Navigate('login')}
    </div>
  )
}

export default PrivateRoutes