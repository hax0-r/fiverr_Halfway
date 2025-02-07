import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { IoMailOutline } from 'react-icons/io5';
import { MdLockOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../Components/Firebase';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Both fields are required!');
            return;
        }

        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address!');
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('Login', true)
            toast.success('Login Successful!');
            navigate("/map")
        } catch (error) {
            toast.error('Invalid Email and Password!');
        }


    };

    // Email validation function
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <>
            <div className="flex py-10 px-4 bgMain items-center justify-center min-h-screen">
                <div className="flex w-full rounded-lg max-w-7xl min-h-[90vh] lg:flex-row flex-col overflow-hidden myShadow bg-white border-none">
                    <div className="py-12 md:px-10 px-4 lg:max-w-xl w-full flex flex-col justify-center bg-teal-100">
                        <h1 className="text-4xl mb-6 text-teal-800 font-bold">LOG IN</h1>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            {/* Email Input */}
                            <div className="relative w-full">
                                <label htmlFor="email" className="text-lg text-teal-800">Email</label>
                                <div className="flex items-center gap-3 w-full p-3 border border-teal-800 rounded-xl">
                                    <IoMailOutline className='text-teal-800 text-2xl' />
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full text-base bg-transparent outline-none focus:border-teal-900"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="relative w-full">
                                <label htmlFor="password" className="text-lg text-teal-800">Password</label>
                                <div className="flex items-center gap-3 w-full p-3 border border-teal-800 rounded-xl">
                                    <MdLockOutline className='text-teal-800 text-2xl' />
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full text-base outline-none focus:border-teal-900"
                                    />
                                </div>
                            </div>

                            <a href="#" className="text-center text-sm text-teal-600 transition-all duration-500 mt-[-1rem] mb-6 hover:text-teal-700">Forgot Password?</a>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full p-3 rounded-xl border-none duration-500 text-base cursor-pointer bg-teal-600 text-white font-semibold transition-all hover:bg-teal-700 hover:scale-105"
                            >
                                Sign in
                            </button>

                            {/* Create Account Button */}
                            <button
                                type="button"
                                onClick={() => navigate("/signup")}
                                className="bg-teal-800 text-white no-underline p-3 rounded-xl block cursor-pointer text-center font-semibold transition-all duration-500 hover:bg-teal-900 hover:scale-105"
                            >
                                Create Account
                            </button>
                        </form>
                    </div>

                    {/* Right Side Content */}
                    <div className="flex-1 lg:border-l-2 border-teal-800 bg-cover flex flex-col justify-center items-center text-center md:px-8 py-16 p-4">
                        <h2 className="md:text-4xl text-3xl text-teal-800 font-bold">MEET ME HALFWAY</h2>
                        <div className="max-w-3xl mx-auto overflow-hidden md:whitespace-nowrap">
                            <p className="text-lg text-teal-800 inline-block overflow-hidden mt-5 md:border-r-2 border-teal-800 animate-typing">
                                Welcome to <strong>Meet Me Halfway</strong>, your web app for finding the perfect midpoint!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
