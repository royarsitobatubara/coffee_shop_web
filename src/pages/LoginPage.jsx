import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import * as authService from "../api/authService.js"

function LoginPage({ setLogin }) {
    const [dataUser, setDataUser] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate()

    const inputHandle = (e) => {
        const { name, value } = e.target;
        setDataUser({
            ...dataUser,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await authService.login({ email: dataUser.email, password: dataUser.password });
            if (result.data.success == true) {
                localStorage.setItem('isLogin', true)
                localStorage.setItem('user', JSON.stringify(result.data.data))
                localStorage.setItem('role', result.data.data.role)
                if (result.data.data.role === "admin"){
                    navigate('/admin')
                }else{
                    navigate('/')
                }
                setLogin(false)
            }
        } catch (error) {
            console.error("Login gagal", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--white)] rounded-sm shadow-lg px-8 py-4 flex flex-col items-center gap-2 justify-center'>
            <button type='button' onClick={() => setLogin(e => !e)} className='top-5 right-5 absolute text-[var(--primary)] cursor-pointer'>
                <IoMdClose size={20} />
            </button>
            <h2 className='text-xl font-bold text-center text-[var(--primary)]'>Welcome Back!</h2>
            <p className='text-[var(--primary)] text-center'>We missed you! Please enter your detail</p>

            <div className='flex flex-col w-full'>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={dataUser.email}
                    onChange={inputHandle}
                    placeholder='Enter your Email'
                    className='border-none w-full rounded-md outline-[var(--primary)] bg-[var(--white2)] px-2 py-1'
                />
            </div>

            <div className='flex flex-col w-full'>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={dataUser.password}
                    onChange={inputHandle}
                    placeholder='Enter your password'
                    className='border-none w-full rounded-md outline-[var(--primary)] bg-[var(--white2)] px-2 py-1'
                />
            </div>

            <button type="submit" className='w-full rounded-md bg-[var(--primary)] py-1 font-bold text-white mt-5'>
                Submit
            </button>

            <p>No have account? <Link to='/register' className='font-semibold text-[var(--primary)]'>Register</Link></p>
        </form>
    )
}

export default LoginPage
