import React from 'react'
import { IoMailOutline } from 'react-icons/io5'
import { MdLockOutline } from 'react-icons/md'

const Login = () => {
    return (
        <>
            <div className="flex py-10 px-4 bgMain items-center justify-center min-h-screen">
                <div className="flex w-full rounded-lg max-w-7xl min-h-[90vh] lg:flex-row flex-col overflow-hidden myShadow bg-white border-none">
                    <div className="py-12 md:px-10 px-4 max-w-xl w-full flex flex-col justify-center bg-teal-100">
                        <h1 className="text-4xl mb-6 text-teal-800 font-bold">LOG IN</h1>
                        <form className="flex flex-col gap-6">
                            <div className="relative w-full">
                                <label htmlFor="email" className="text-lg text-teal-800">Email</label>
                                <div className="flex items-center gap-3 w-full p-3 border border-teal-800 rounded-xl">
                                    <IoMailOutline className=' text-teal-800 text-2xl' />
                                    <input type="email" id="email" placeholder="Email" required className="w-full text-base outline-none focus:border-teal-900" />
                                </div>
                            </div>
                            <div className="relative w-full">
                                <i className="bx bx-lock absolute left-2.5 top-1/2 transform -translate-y-1/2 text-teal-800 text-xl"></i>
                                <label htmlFor="password" className="text-lg text-teal-800">Password</label>
                                <div className="flex items-center gap-3 w-full p-3 border border-teal-800 rounded-xl">
                                    <MdLockOutline className=' text-teal-800 text-2xl' />
                                    <input type="password" id="Password" placeholder="Password" required className="w-full text-base outline-none focus:border-teal-900" />
                                </div>
                            </div>
                            <a href="#" className="text-center text-sm text-teal-600 transition-all duration-500 mt-[-1rem] mb-6 hover:text-teal-700">Forgot Password?</a>
                            <button className="w-full p-3 rounded-xl border-none duration-500 text-base cursor-pointer bg-teal-600 text-white font-semibold transition-all hover:bg-teal-700 hover:scale-105">Sign in</button>
                            <a href="sign-up.html" className="bg-teal-800 text-white no-underline p-3 rounded-xl block text-center font-semibold transition-all duration-500 hover:bg-teal-900 hover:scale-105">Create Account</a>
                        </form>
                    </div>
                    <div className="flex-1 md:border-l-2 border-teal-800 bg-cover flex flex-col justify-center items-center text-center md:p-8 py-8 p-4">
                        <h2 className="md:text-4xl text-3xl text-teal-800 font-bold">MEET ME HALFWAY</h2>
                        <div className="max-w-3xl mx-auto overflow-hidden md:whitespace-nowrap">
                            <p className="text-lg text-teal-800 inline-block overflow-hidden mt-5 md:border-r-2 border-teal-800 animate-typing">Welcome to <strong>Meet Me Halfway</strong>, your web app for finding the perfect midpoint!</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login