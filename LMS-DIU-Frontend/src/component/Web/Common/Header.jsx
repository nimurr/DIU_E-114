import React, { useState } from 'react';
import logo from "/logo/dashboard_log.png";
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa'; // For hamburger icon

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [semesterMenuOpen, setSemesterMenuOpen] = useState(false); // State to toggle semester menu visibility

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const toggleSemesterMenu = () => setSemesterMenuOpen(!semesterMenuOpen); // Function to toggle the semester menu

    return (
        <div className='w-full py-3 bg-webPrimary backdrop-blur-xl flex justify-between items-center text-white'>
            <div className='contianer flex items-center justify-between'>
                {/* Logo */}
                <NavLink onClick={toggleMenu} to={`/web`} className='flex items-center gap-3'>
                    <img
                        className='md:w-[70px] w-[50px] logo-animate'
                        src={logo}
                        alt="Logo"
                    />
                    <div>
                        <h1 className='md:text-4xl text-2xl font-semibold'>DIU E114</h1>
                    </div>
                </NavLink>

                {/* Hamburger Icon (Mobile) */}
                <div className='lg:hidden z-[9999]'>
                    <button onClick={toggleMenu}>
                        {menuOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <ul className={`lg:flex gap-10 items-center ${menuOpen ? 'absolute top-0 left-0 w-full h-screen bg-webPrimary flex flex-col justify-center items-center' : 'hidden'} lg:block`}>
                    <li>
                        <NavLink onClick={toggleMenu} className='hover:text-secondary duration-300 py-5' to={`/web`}> Home </NavLink>
                    </li>

                    {/* Semester Info Dropdown */}
                    <li>
                        <div className='relative'>
                            <button onClick={toggleSemesterMenu} className='hover:text-secondary duration-300 py-5'>
                                Semester Info
                            </button>
                            <ul className={`absolute pt-8 -left-1 min-w-44 w-auto bg-webPrimary flex flex-col items-center ${semesterMenuOpen ? 'block' : 'hidden'}`}>
                                <Link onClick={toggleSemesterMenu} to={`/web/semester-info/1`} className='hover:text-secondary duration-300 px-3 py-3'>1st Semester</Link>
                                <Link onClick={toggleSemesterMenu} to={`/web/semester-info/2`} className='hover:text-secondary duration-300 px-3 py-3'>2nd Semester</Link>
                                <Link onClick={toggleSemesterMenu} to={`/web/semester-info/3`} className='hover:text-secondary duration-300 px-3 py-3'>3rd Semester</Link>
                                <Link onClick={toggleSemesterMenu} to={`/web/semester-info/4`} className='hover:text-secondary duration-300 px-3 py-3'>4th Semester</Link>
                                <Link onClick={toggleSemesterMenu} to={`/web/semester-info/5`} className='hover:text-secondary duration-300 px-3 py-3'>5th Semester</Link>
                                <Link onClick={toggleSemesterMenu} to={`/web/semester-info/6`} className='hover:text-secondary duration-300 px-3 py-3'>6th Semester</Link>
                                <Link onClick={toggleSemesterMenu} to={`/web/semester-info/7`} className='hover:text-secondary duration-300 px-3 py-3'>7th Semester</Link>
                                <Link onClick={toggleSemesterMenu} to={`/web/semester-info/8`} className='hover:text-secondary duration-300 px-3 py-3'>8th Semester</Link>
                            </ul>
                        </div>
                    </li>

                    {/* Other Links */}
                    <li>
                        <NavLink className='hover:text-secondary duration-300' to={`/web/all-students`}> Students </NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:text-secondary duration-300' to={`/web/all-teachers`}> Teachers </NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:text-secondary duration-300' to={`/web`}> Others </NavLink>
                    </li>

                    {/* Login Button */}
                    <li>
                        <NavLink className='bg-secondary px-5 py-2 rounded duration-300 flex items-center gap-2' to={`/auth`}>
                            <FaUser /> Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
