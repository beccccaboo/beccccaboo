import React from 'react'
import { BsDownload } from 'react-icons/bs'
import ProfileImage from '../assets/Self.png'

const Home = () => {
  return (
    // Container for both image and text
    <div name='home' className='max-w-[1000px] w-full max-h-[100%] sm:flex sm:flex-row justify-center items-center mx-auto gap-5'>
        {/* Container flexbox for text */}
        <div className='w-full h-screen md:max-w-[750px] text-left'>
            <div className='max-w-[1000px] flex flex-col justify-center h-full mx-8 sm:ml-8'>
                <p className='text-[#1e3751]'>Hi, I am</p>
                <h1 className='text-4xl md:text-7xl font-bold text-[#1e3751] mb-2'>Rebecca Biju</h1>
                <h6 className='text-2xl md:text-3xl font-bold text-[#6a7280] max-w-[800px]'>Software and DevOps Engineer</h6>
                <p className='text-[#6a7280] py-4 max-w-[700px]'>With a strong background in software engineering and DevOps, I bring a passion for driving operational efficiency and innovation through cloud infrastructure and automation. Leveraging my expertise in programming languages, cloud computing, and CI/CD pipelines, I excel in developing scalable applications and enhancing user experiences while collaborating effectively with cross-functional teams</p>
                <div>
                
						
                        <a
						download="RebeccaBiju_Resume.pdf"
						href="/files/RebeccaBiju_Resume.pdf"
                        className='inline-block'
						// className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						// aria-label="Download Resume"
					    >
                                <button className='text-white bg-[#C3073F] px-6 py-3 my-2 flex items-center hover:bg-[#1e3751] rounded-sm'>My Resume<BsDownload className='ml-3'/></button>
                    </a>
                        
					
                    {/* <button className='text-white bg-[#C3073F] px-6 py-3 my-2 flex items-center hover:bg-[#1e3751] rounded-sm'>My Projects <HiArrowNarrowRight className='ml-3'/></button> */}
                </div>
            </div>
        </div>
        <div className="hidden sm:block lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-[250px] rounded-full overflow-hidden mx-8 sm:mr-8">
            <img className='object-cover h-[100%] w-[100%]' src={ProfileImage} alt="Profile"/>
        </div>
    </div>
  )
}

export default Home