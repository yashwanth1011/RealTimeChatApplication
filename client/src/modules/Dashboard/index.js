import React from 'react'
import Avatar from '../../assets/avatar.png'


const Dashboard = () => {
    const contacts = [
        {
            name: "John",
            status: "Available",
            img: Avatar
        },
        {
            name: "Pavan",
            status: "Not Available",
            img: Avatar

        },
        {
            name: "Lucky",
            status: "Available",
            img: Avatar
        },
        {
            name: "Cookie",
            status: "Not Available",
            img: Avatar

        }
    ]
    return (
        <div className='w-screen flex'>
            <div className='w-[25%] border border-black h-screen bg-secondary'>
                <div className='flex justify-center items-center my-8'>
                    <div className='border border-primary p-[2px] rounded-full'>
                        <img src={Avatar} width={50} height={50} />
                    </div>
                    <div className='ml-8'>
                        <h3 className='text-xl'>Yashwanth Chennu</h3>
                        <p className='text-lg font-light'>My Account</p>
                    </div>

                </div>
                <hr />
                <div className='mx-14 ml-14'>
                    <div className='text-primary text-lg'>Messages</div>
                    <div>
                        {
                            contacts.map(({ name, status, img }) => {
                                return (
                                    <div className='flex items-center py-8 border-b border-b-gray-300'>
                                        <div className = 'cursor-pointer flex items-center'>  <div className=' border border-primary p-[2px] rounded-full'>
                                            <img src={img} width={50} height={50} />
                                        </div>
                                        <div className='ml-6'>
                                            <h3 className='text-lg font-semibold'>{name}</h3>
                                            <p className=' text-sm font-light text-gray-600'>{status}</p>
                                        </div>

                                        </div> 

                                    </div>

                                )

                            })
                        }

                    </div>

                </div>

            </div>
            <div className='w-[50%] border border-black h-screen'></div>
            <div className='w-[25%] border border-black h-screen'></div>


        </div>
    )
}

export default Dashboard