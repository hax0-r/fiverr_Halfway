import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import GetStarted from '../Pages/GetStarted'
import SignUp from '../Pages/SignUp'
import Map from '../Pages/Map'
import History from '../Pages/History'
import PrivateRoutes from './PrivateRoutes'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/map" element={<Map />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </>
  )
}

export default Router