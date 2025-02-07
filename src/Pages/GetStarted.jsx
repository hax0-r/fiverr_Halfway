import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex items-center bgMain justify-center h-screen w-full flex-col gap-5">
                <img src={logo} alt="logo" className='md:mb-10 mb-5 md:h-28 h-20 bounce' />
                <h1 className='md:text-4xl text-3xl text-zinc-700 font-semibold'>Meet Me Halfway</h1>
                <button onClick={()=> navigate("/login")} className='rounded-full transition-all duration-500 cursor-pointer hover:bg-[#298b77] hover:scale-105 px-8 py-3.5 text-white bg-[#349f89] text-lg font-medium'>Get Started</button>
            </div>
        </>
    )
}

export default GetStarted