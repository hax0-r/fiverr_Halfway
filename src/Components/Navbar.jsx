import React from 'react'
import logo from '../assets/logo.png'
import { FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const LogoutHandler = () => {
        localStorage.removeItem ('Login')
        navigate("/login")
    }
    return (
        <>
            <div className="bg-white p-4 border-b border-gray-200">
                <div className="flex items-center max-w-7xl w-full mx-auto justify-between">
                    <img src={logo} alt="Logo" className="md:h-12 h-10" />
                    <div className="text-3xl font-semibold text-zinc-700">MEET ME HALFWAY</div>
                    <div className="flex items-center gap-7">
                        <Link to={"/history"}>
                            <FaUser className='text-xl text-zinc-700 cursor-pointer' />
                        </Link>
                        {/* <FaBars className='text-xl text-zinc-700 cursor-pointer' /> */}
                        <button onClick={LogoutHandler} className=' border border-red-600 text-red-600 transition-all duration-500 hover:text-white hover:bg-red-600 cursor-pointer px-5 py-1.5 rounded-lg'>Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar