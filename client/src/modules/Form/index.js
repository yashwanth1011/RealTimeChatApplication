import React from 'react'
import Input from "../../Components/Input"
export const Form = () => {
  return (
    <div className='bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <div className='text-4xl font-extrabold'>Welcome</div>
        <div className='text-xl font-light mb-10'>Sign up for Now</div>
        <Input label='Full Name' name = 'Full Name' type = 'text' placeholder='Enter your full name' className=' mb-6'/>
        <Input label='Email Address' name = 'Email' type = 'email' placeholder='Enter Email Address' className=' mb-6'/>
        <Input label='Password' name = 'Password' type = 'password' placeholder='Enter Password' className=' mb-6'/>
        
    </div>
  )
}
