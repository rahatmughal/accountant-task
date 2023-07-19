import React from 'react';
import { footer, footerbottom, footerleft, socialIcons } from '../Data'
import { Link } from "react-router-dom";
import { logo } from '../Assets';
function Footer() {
    return (
        <footer className='bg-[rgb(1,133,150)] text-white'>
            <div className='w-full md:py-12 py-lg md:flex items-center justify-around border border-transparent border-b-white'>

                {/* Site detail and Social icons */}
                <div className='md:w-1/4 w-full p-[40px] md:p-[30px]'>
                    <img src={logo} alt="logo" className='lg:w-[160px] w-[100px]'/>
                    <p className='lg:py-xl py-md lg:text-sm text-xs'>Warr & Co offer a full range of business accounting services to companies across the UK from our offices in Stockport,</p>

                    <div className='flex gap-sm'>
                        {socialIcons.map(item => (
                            <Link key={item.id} to={item.link}>
                                <img src={item.icon} alt="icon" className='lg:w-[25px] md:w-[14px] w-[12px]' />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Footer menu */}
                <div className='md:flex block'>
                    <div className='flex w-full md:w-fit justify-between md:px-[0px] px-[20px] '>
                        {footer.map(item => (
                            <div key={item.title} className='lg:px-[40px] px-[20px]'>
                                <h2 className='font-bold py-md lg:text-base text-sm'>{item.title}</h2>
                                <ul>
                                    {item.submenu.map(link => (
                                        <li key={link.subtitle} className='lg:text-sm text-xs font-extralight lg:py-md pt-md opacity-80'>
                                            <Link to={link.sublink}>{link.subtitle}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className='block  md:px-[0px] px-[20px]'>
                        {footerleft.map(item => (
                            <div key={item.title} className='lg:px-[40px] px-[20px]'>
                                <h2 className='font-bold py-md lg:text-base text-sm'>{item.title}</h2>
                                <ul>
                                    {item.submenu.map(link => (
                                        <li key={link.subtitle} className='lg:text-sm text-xs font-extralight lg:py-md pt-md opacity-80'>
                                            {link.sublink === '' ? link.subtitle :
                                                <Link to={link.sublink}>{link.subtitle}</Link>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-xl pb-[32px] flex items-center justify-between md:justify-around">
                <span className='md:text-sm text-[8px]'>&copy; 2023 Handla Pa Spot. All rights reserved.</span>

                <div className='flex gap-md md:text-sm text-[8px]'>
                    {footerbottom.map(c=>(
                        <Link to={c.link} key={c.title}>{c.title}</Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
