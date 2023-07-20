import React from 'react'
import { team, teamwork } from '../Assets'
import { servicesIconbox } from '../Data'

const Services = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className='w-full flex items-center justify-center h-[420px] bg-service-banner bg-cover'>

                <div className='w-[500px] md:p-lg p-xl text-center'>
                    <h1 className='md:text-5xl text-4xl font-thin text-white'>Get <span className='text-[rgb(216,186,79)] font-bold'>£250</span> Of Your Accountant Fees</h1>
                    <form className='flex items-center justify-center py-xl'>
                        <input type="search" placeholder='Enter your search' className='w-full p-sm md:text-sm text-xs rounded-l-full focus:outline-none' />
                        <input type='submit' className='bg-[rgb(216,186,79)] py-sm px-lg text-white md:text-sm text-xs  rounded-r-full' value='Invite' />
                    </form>
                </div>

            </section>

            <section className='p-xl md:p-lg'>
                <div className='flex justify-center'>
                    <form className='flex items-center justify-center py-xl w-[500px]'>
                        <input type="search" placeholder='Enter your search' className='w-full border border-gray-300 p-sm md:text-sm text-xs rounded-l-full focus:outline-none' />
                        <input type='submit' className='hover:bg-slate-100 border border-black py-sm px-lg md:text-sm text-xs rounded-r-full' value='Copy Link' />
                    </form>
                </div>

                <div className='mt-10'>
                    <h1 className='text-center lg:text-4xl md:text-3xl text-2xl font-semibold tracking-wide leading-10 mb-xl'>Its easy to earn credits in few simple steps</h1>
                </div>

                <div className='mt-10'>
                    <div className='w-full flex justify-center'>
                        <div className='md:w-full md:flex items-start justify-around lg:gap-lg md:gap-md'>
                            {servicesIconbox.map(item => (
                                <div key={item.id} className='flex flex-col items-center justify-center w-[250px] gap-lg text-center py-xl'>
                                    <div className={`lg:w-[80px] lg:h-[80px] md:w-[50px] md:h-[50px] flex items-center justify-center p-sm ${item.bgcolor} rounded-full`}>
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <h1 className={`lg:text-xl md:text-lg font-bold ${item.color}`}>{item.title}</h1>
                                    <p className='lg:text-base md:text-sm'>{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='w-full flex justify-center'>
                        <div className='lg:px-[50px] md:flex items-center justify-between lg:gap-lg md:gap-md'>
                            <div className='lg:w-3/5 md:w-1/2 w-full my-xl'>
                                <img src={teamwork} alt={teamwork} />
                            </div>
                            <div className='lg:2/5 md:w-1/2 w-full my-xl text-center flex flex-col items-center lg:p-xl md:p-lg'>
                                <h1 className=' lg:text-2xl text-lg font-extrabold'>£250 off account fees</h1>
                                <span className='font-thin lg:text-base md:text-xs text-sm lg:py-md py-sm'>Sign up and claim your voucher</span>
                                
                                <form className='lg:p-lg'>
                                    <div className='flex w-full lg:mt-lg mt-md gap-lg'>
                                        <div className='w-1/2'>
                                            <input type="text" placeholder='full Name' className=' lg:p-md p-sm border-gray-500 border focus:outline-none w-full lg:text-sm text-xs rounded-full' />
                                        </div>
                                        <div className='w-1/2'>
                                            <input type="text" placeholder='Last Name' className=' lg:p-md p-sm border-gray-500 border focus:outline-none w-full lg:text-sm text-xs rounded-full' />
                                        </div>
                                    </div>

                                    <div className='flex w-full lg:mt-lg mt-md gap-lg'>
                                        <div className=' lg:p-md p-sm border-gray-500 border focus:outline-none w-full lg:text-sm text-xs rounded-full flex gap-sm'>
                                            <span className='text-gray-400'>+1</span>
                                            <input type="text" placeholder='(201) 555-5555' className='w-full border-none focus:outline-none' />
                                        </div>
                                    </div>

                                    <div className='flex w-full lg:mt-lg mt-md gap-lg'>
                                        <input type="email" placeholder='Email' className=' lg:p-md p-sm border-gray-500 border focus:outline-none w-full lg:text-sm text-xs rounded-full' />
                                    </div>
                                    <div className='flex w-full lg:mt-lg mt-md gap-lg'>
                                        <input type="password" placeholder='Password' className=' lg:p-md p-sm border-gray-500 border focus:outline-none w-full lg:text-sm text-xs rounded-full' />
                                    </div>
                                    <div className='flex w-full lg:mt-lg mt-md gap-lg'>
                                        <input type='submit' className='global-btn w-full bg-[rgb(216,186,79)] cursor-pointer lg:text-base text-xs' value='Sign Up' />
                                    </div>
                                </form>
                                <span className='lg:text-[10px] text-[8px] py-sm text-gray-500'>By clicking ‘sign up’, you agree to accountant terms and conditions and privacy policy</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Services