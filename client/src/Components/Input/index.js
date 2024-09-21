import React from 'react'

const Input = ({
    label = '',
    name = '',
    type = 'text',
    className = '',
    isRequired = false,
    placeholder = '', 
    value = '',
    onChange = () => {},

}) => {
  return (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-800">{name}</label>
        <input type={type} id={name} className={` w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ${className}`} placeholder={placeholder} required = {isRequired} value = {value} onChange={onChange}/>
    </div>
  )
}


export default Input