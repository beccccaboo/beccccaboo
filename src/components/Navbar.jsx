import React, {useState} from 'react'
import Logo from '../assets/RB.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav)
    
    return(
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#6F2232]'>
        <div><img src={Logo} alt="Logo" style={{ width: '70px' }}></img></div>
        {/* Menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>

        {/* Hamburger */}
        <div onClick={toggleNav} className='md:hidden z-10'>
            {nav? <FaTimes/> : <FaBars/>}
        </div>

        {/* Mobile Menu */}
        <ul className={nav ?'mobile-menu absolute top-0 left-0 w-full h-screen bg-[#6F2232] flex flex-col items-center justify-center':'hidden'}>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a 
                    className='flex justify-between items-center w-full text-white' 
                    href='/'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a 
                    className='flex justify-between items-center w-full text-white' 
                    href='/'>
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a 
                    className='flex justify-between items-center w-full text-white' 
                    href='/'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a 
                    className='flex justify-between items-center w-full text-white' 
                    href='/'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
        
    </div>
    )
}

export default Navbar