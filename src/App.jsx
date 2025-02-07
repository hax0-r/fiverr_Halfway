import React from 'react'
import './App.css'
import Router from './Routers/Router'
import { ToastContainer } from 'react-toastify'
import { LoginProvider } from './Context/MyContext'

function App() {

  return (
    <>
      <LoginProvider>
        <ToastContainer />
        <Router />
      </LoginProvider>
    </>
  )
}

export default App
