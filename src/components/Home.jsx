import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import ProfileImage from '../assets/Self.png'
import { Slide } from "react-awesome-reveal";
const Home = () => {
  return (
    <div className='w-full max-h-[100%] md:flex justify-center items-center mx-auto gap-5'>
        <div name='home' className='w-full h-screen md:max-w-[700px] text-left'>
            <div className='max-w-[1000px] flex flex-col justify-center h-full mx-auto pl-8'>
                <p className='text-[#1E5E5E]'>Hi, I am</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#1e3751] mb-2'>Rebecca Biju</h1>
                <h6 className='text-2xl sm:text-3xl font-bold text-[#6a7280] max-w-[700px]'>A Full Stack Developer, UX and Cloud Enthusiast</h6>
                <p className='text-[#6a7280] py-4 max-w-[700px]'>I have a strong background in web development and a passion for creating innovative solutions. With expertise in programming languages, cloud computing, and user experience design, I excel in developing scalable applications and collaborating with cross-functional teams</p>
                <div>
                    <button className='text-white bg-[#C3073F] px-6 py-3 my-2 flex items-center hover:bg-[#1e3751]'>My Projects <HiArrowNarrowRight className='ml-3'/></button>
                </div>
            </div>
        </div>
        <div className="lg:w-[500px] lg:h-[500px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden mr-8">
            <img className='object-cover h-[100%] w-[100%]' src={ProfileImage} alt="Profile"/>
        </div>
    </div>
  )
}

export default Home