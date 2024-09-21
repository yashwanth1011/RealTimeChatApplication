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
        <div className='bg-[#e1edff] h-screen flex justify-center items-center' >
            <div className='w-screen flex'>
                <div className='w-[25%] border h-screen'>
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
                                            <div className='cursor-pointer flex items-center'>  <div className=' border border-primary p-[2px] rounded-full'>
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


                <div className='h-screen bg-white flex flex-col items-center'>
                    <div className='w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14'>
                        <div className='cursor-pointer'>
                            <img src={Avatar} width={60} height={60} />
                        </div>
                        <div className='ml-6 mr-auto'>
                            <h3 className='text-lg'>Alexander</h3>
                            <p className='text-sm font-light text-gray-600'>online</p>
                        </div>
                        <div className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                            </svg>

                        </div>
                    </div>

                    <div className='h-[75%] w-full overflow-scroll'>
                        <div className='w-[800px] px-10 py-14'>
                            <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                        </div>
                    </div>

                    <div className='p-14 w-full flex items-center'>
                        <input placeholder='Type a message...' className='w-[75%] inputClassName p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none' />
                        <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                                <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 -.1l3.5-7.5-7.5-3.5a0.55 .55 0 0 1 -.1 -1z" />
                            </svg>
                        </div>
                        <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="9" />
                                <line x1="9" y1="12" x2="15" y2="12" />
                                <line x1="12" y1="9" x2="12" y2="15" />
                            </svg>
                        </div>
                    </div>







                </div>
















                <div className='w-[25%] border border-black h-screen'></div>


            </div>

        </div>
    )
}

export default Dashboard