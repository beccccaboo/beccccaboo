import React, {useState} from 'react'
import Logo from '../assets/RB.png'
import {FaBars, FaTimes} from 'react-icons/fa'

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
        <div className='hidden'></div>
        
    </div>
    )
}

export default Navbar