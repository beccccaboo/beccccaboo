import React, {useState} from 'react'
import Logo from '../assets/Logo2.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav)
    
    return(
    <div className='z-10 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1e3751]'>
        <div className='h-50px w-50px rounded-md overflow-hidden'><img className='object-cover h-[100%] w-[100%]' src={Logo} alt="Logo" style={{ width: '50px' }}></img></div>
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
        {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0b65c2]'>
                    <a 
                    className='flex justify-between items-center w-full text-white' 
                    href='/'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#02040a]'>
                    <a 
                    className='flex justify-between items-center w-full text-white' 
                    href='/'>
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C3073F]'>
                    <a 
                    className='flex justify-between items-center w-full text-white' 
                    href='/'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1E3751]'>
                    <a 
                    className='flex justify-between items-center w-full text-white' 
                    href='/'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div> */}
        
    </div>
    )
}

export default Navbar