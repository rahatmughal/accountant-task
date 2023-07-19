import React from 'react'
import { sectorIconBox } from '../Data'
import { Link } from "react-router-dom";

const Sector = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className='w-full md:flex block h-[420px] bg-sector-banner bg-cover'>
                <div className='md:w-1/2 w-full h-full flex flex-col justify-center lg:px-15 md:pl-10 px-lg'>
                    <h1 className='text-[rgb(55,83,111)] lg:text-4xl text-2xl font-thin pb-lg'>TRUSTED ACCOUNTANTS<br />
                        <span className='font-extrabold'>& BUSINESS ADVISORS</span>
                    </h1>
                    <button className='global-btn-2 lg:text-base text-sm cursor-pointer my-lg'>CONSULT NOW</button>
                </div>
            </section>

            <section className=' w-full py-15'>
                {/* lg:px-[150px] md:px-10 p-xl */}
                <div className='md:flex justify-center items-center'>
                    <div className='md:w-1/2 w-full lg:px-[100px] px-[30px]'>
                        <h1 className='text-[rgb(55,83,111)] lg:text-4xl md:text-3xl text-2xl font-extrabold pb-lg'>What is Lorem Ipsum?</h1>

                        <p className='pt-lg lg:text-sm text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <p className='pt-lg lg:text-sm text-xs'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                    <div className='md:w-1/2 w-full flex items-center md:justify-center justify-center mt-10 md:mt-[0px]'>
                        <div className='bg-[rgb(55,83,111)] lg:p-[30px] p-md lg:w-[375px] w-[270px] text-center'>
                            <h1 className='text-[rgb(57,143,228)] lg:text-4xl md:text-3xl text-2xl font-extrabold'>30% OFF</h1>
                            <span className='font-thin text-white lg:text-3xl md:text-xl text-xl'>ON ALL SERVICES</span>
                            <form className='p-md'>
                                <input type="text" placeholder='Full Name' className='bg-white p-sm w-full mt-lg lg:text-base text-sm' />
                                <input type="text" placeholder='Full Name' className='bg-white p-sm w-full mt-lg lg:text-base text-sm' />
                                <button type='submit' className='global-btn-2 bg-[rgb(57,143,228)] mt-[30px] cursor-pointer lg:text-base text-sm my-lg'>SUBMIT</button>
                            </form>


                        </div>
                    </div>
                </div>

                <div className='py-15 w-full flex justify-center'>
                    <div className='md:flex justify-around px-xl items-center w-full'>
                        {sectorIconBox.map(ico => (
                            <div key={ico.id} className='flex justify-start my-md gap-md items-center lg:w-[280px]'>
                                <div className='flex items-center justify-center lg:p-[10px] lg:w-[50px] lg:h-[50px] p-[5px] w-[30px] h-[30px] bg-[rgb(55,83,111)]'>
                                    <img src={ico.icon} alt="telephoneCall" />
                                </div>
                                <div>
                                    <p className='lg:text-sm text-xs font-extrabold'>{ico.title} </p>
                                    <p className='lg:text-sm text-xs '>{ico.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Sector