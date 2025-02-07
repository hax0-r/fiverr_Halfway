import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { IoMailOutline, IoPersonOutline } from 'react-icons/io5'
import { MdLockOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, db } from '../Components/Firebase';
import { setDoc, doc } from 'firebase/firestore';

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, password, confirmPassword } = formData;

        // Basic validation
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            toast.error('All fields are required!');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long!');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }

        // Log form data if validation passes

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            // Create a new user document in the Firestore database
            if (user) {
                await setDoc(doc(db, 'users', user.uid), {
                    firstName: firstName,
                    lastName: lastName,
                    email: user.email
                });
            }
            toast.success('Account created successfully!');
            navigate("/login")

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                toast.error('User already registered with this email!');
            } else {
                toast.error('Error creating account!');
            }
        }
    };

    return (
        <div className="flex py-10 px-4 bgMain items-center justify-center min-h-screen">
            <div className="flex w-full rounded-lg max-w-7xl min-h-[90vh] lg:flex-row flex-col overflow-hidden myShadow bg-white border-none">
                <div className="py-12 md:px-10 px-4 lg:max-w-xl w-full flex flex-col justify-center bg-teal-100">
                    <h1 className="text-4xl mb-6 text-teal-800 font-bold">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <InputField
                            label="First Name"
                            icon={<IoPersonOutline className='text-teal-800 text-2xl' />}
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter First Name"
                        />
                        <InputField
                            label="Last Name"
                            icon={<IoPersonOutline className='text-teal-800 text-2xl' />}
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter Last Name"
                        />
                        <InputField
                            label="Email"
                            icon={<IoMailOutline className='text-teal-800 text-2xl' />}
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                        />
                        <InputField
                            label="Password"
                            icon={<MdLockOutline className='text-teal-800 text-2xl' />}
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter Password"
                        />
                        <InputField
                            label="Re-enter Password"
                            icon={<MdLockOutline className='text-teal-800 text-2xl' />}
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-enter Password"
                        />

                        <button
                            type="submit"
                            className="w-full p-3 rounded-xl border-none duration-500 text-base cursor-pointer bg-teal-600 text-white font-semibold transition-all hover:bg-teal-700 hover:scale-105"
                        >
                            Create Account
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            className="bg-teal-800 text-white no-underline p-3 rounded-xl block cursor-pointer text-center font-semibold transition-all duration-500 hover:bg-teal-900 hover:scale-105"
                        >
                            Back To Login
                        </button>
                    </form>
                </div>
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
    );
};

// Reusable input component
const InputField = ({ label, icon, name, value, onChange, type = "text", placeholder }) => (
    <div className="relative w-full">
        <label htmlFor={name} className="text-lg text-teal-800">{label}</label>
        <div className="flex items-center gap-3 w-full p-3 border border-teal-800 rounded-xl">
            {icon}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full text-base outline-none focus:border-teal-900"
            />
        </div>
    </div>
);

export default SignUp;
