import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";;
import { logo } from "../Assets";
import { NavLinks } from "../Data";
import { phone } from "../Assets";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [heading, setHeadding] = useState('');

    return (

        <>
            {/* Primary Menu */}
            <nav className={`w-full bg-white flex items-center justify-between py-md`}>

                {/* Logo + Toggle Button + Menu */}
                <div className=" w-full flex items-center justify-around gap-lg">

                    {/* Logo */}
                    <div className="z-50 lg:w-auto w-full  lg:ml-[0px] ml-md">
                        <Link to='/'>
                            <img src={logo} alt="logo" className="lg:w-[150px] sm:w-[150px] w-[100px]" />
                        </Link>
                    </div>

                    {/* Web Navbar */}
                    <div className="lg:flex hidden gap-md">
                        <ul className="lg:inline-flex justify-center gap-xl mt-[8px]">
                            {
                                NavLinks.map(navlink => (
                                    navlink.name === 'Home' ? '' : (
                                        <li key={navlink.name} className="group animate separator">

                                            <Link to={navlink.link} className="font-normal font-sans text-black hover:text-gray-500 duration-300 group animate">
                                                {navlink.name}
                                            </Link>
                                        </li>
                                    )
                                ))
                            }
                        </ul>

                        {/* Contact */}
                        <div className=" md:ml-md flex gap-sm items-center">
                            <Link to='/contact' className="flex items-center">
                                <img src={phone} alt="contact" />
                                <span className="px-sm"> +92316-7168682</span>
                            </Link>
                            <Link to='/contact'>
                                <button className="global-btn">Contact</button>
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Side Icons */}
                <GrMenu className="lg:hidden text-xl mr-md" onClick={() => setOpen(!open)} />



                {/* Mobile nav */}
                <ul className={`lg:hidden block bg-white w-screen h-screen drop-shadow-lg fixed top-[0px] py-13 px-xl  z-50 ${open ? "left-[0px]" : "left-[-102%]"}  overflow-y-scroll duration-500 `}>

                    {/* Close Icon */}
                    <AiOutlineClose className="text-2xl text-gray-500 absolute top-[5px] right-[5px]" onClick={() => setOpen(!open)} />

                    <div className="mt-[30px]">
                        {NavLinks.map(mob => (

                            <li key={mob.name} className="lg:hidden bg-white block w-full py-md border-b-2 last:border-b-0" >
                                <NavLink to={mob.link} className="font-normal font-sans text-black hover:text-gray-500" onClick={() => mob.name === 'Gift Shop' ? '' : setOpen(!open)}>
                                    <div className="w-full h-full flex justify-between" onClick={() => { heading !== mob.name ? setHeadding(mob.name) : setHeadding('') }}>
                                        <span>{mob.name}</span>
                                    </div>
                                </NavLink>
                            </li>
                        ))}
                    </div>
                    {/* Contact */}
                    <div className="flex gap-sm items-center justify-center py-md">
                        <Link to='/contact' className="flex items-center">
                            <img src={phone} alt="contact" />
                            <span className="px-sm text-[12px]"> +92316-7168682</span>
                        </Link>
                        <Link to='/contact'>
                            <button className="global-btn">Contact</button>
                        </Link>
                    </div>

                </ul>

            </nav>

        </>
    );
};

export default Header


