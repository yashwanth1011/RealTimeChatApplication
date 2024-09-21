import React, { useState } from 'react'
import Input from "../../Components/Input"
import Button from '../../Components/Button'
import { Navigate, useNavigate } from 'react-router-dom'

export const Form = ({
    isSignInPage = true,
}) => {

    const [data, setData] = useState({
        ...(!isSignInPage && { fullname: '' }),

        email: '',
        password: ''
    })

    const navigate = useNavigate()




    return (
        <div className='bg-[#e1edff] h-screen flex justify-center items-center' >
            <div className='bg-white w-[800px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
                <div className='text-4xl font-extrabold'>Welcome {isSignInPage ? 'back' : ''}</div>
                <div className='text-xl font-light'>
                    <div className='mb-10'> <center>{isSignInPage ? 'Sign in to explore the chat App' : 'Sign up for Now to get started'}</center></div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        console.log("Form submitted", data);
                    }}>
                        {isSignInPage ? '' : <Input label='Full Name' name='Full Name' type='text' placeholder='Enter your full name' className=' mb-6' value={data.fullname} onChange={(e) => setData({ ...data, fullname: e.target.value })} />}
                        <Input label='Email Address' name='Email' type='email' placeholder='Enter Email Address' className=' mb-6' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                        <Input label='Password' name='Password' type='password' placeholder='Enter Password' className=' mb-6' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                        <Button label={isSignInPage ? "Sign Up" : "Sign In"} type="submit" />
                        <div className='text-sm'>{isSignInPage ? "Didn't have an account?" : "Already have an account? "}<span className=' text-primary cursor-pointer underline mb-6' onClick={() => navigate(`/users/${isSignInPage ? 'sign_up':'sign_in'}`)}>{isSignInPage ? 'Sign In' : 'Sign Up'}</span></div>
                    </form>
                </div>




            </div>
        </div>
    )
}
