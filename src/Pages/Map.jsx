import React from 'react'
import Navbar from '../Components/Navbar'
import { IoIosSearch } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

const Map = () => {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                <div className="fixed z-10 top-40 left-5 max-w-[20rem] w-full bg-white border border-gray-200 rounded-lg p-4">
                    <input type="text" className='border border-gray-200 p-2 w-full rounded-lg' placeholder='Choose start Location' />
                    <input type="text" className='border border-gray-200 p-2 w-full rounded-lg mt-2' placeholder='Enter Destination' />
                    <button
                        type="submit"
                        className="w-full flex items-center gap-1 justify-center mt-3 p-3 rounded-xl border-none duration-500 text-base cursor-pointer bg-[#1b6657] text-white font-semibold transition-all hover:bg-[#1d554a] hover:scale-105"
                    >
                        Search <IoSearch className='text-xl' />
                    </button>
                </div>
                <div className="relative pt-5">
                    <iframe className='w-full top-0 left-0 h-[calc(100vh-5.05rem)] absolute' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22046490.506841604!2d1.0347762296356362!3d47.58292415475011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2sEurope!5e0!3m2!1sen!2s!4v1738909609995!5m2!1sen!2s" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    <div className="border relative z-10 bg-white border-gray-200 rounded-full max-w-lg px-4 p-2 w-full mx-auto flex items-center gap-2">
                        <input type="text" className='w-full p-0.5' placeholder='Search here...' />
                        <IoIosSearch className='text-xl text-zinc-600 cursor-pointer' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Map