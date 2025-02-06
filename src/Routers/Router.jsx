import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import GetStarted from '../Pages/GetStarted'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default Router