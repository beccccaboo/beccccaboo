import React from 'react'
import {
	FaGithub, FaLinkedin,
} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
const socialLinks = [
	{
		id: 1,
		icon: <FaGithub />,
		url: 'https://github.com/beccccaboo',
        bgColour: 'githubBlack'
	},
	{
		id: 2,
		icon: <FaLinkedin />,
		url: 'https://www.linkedin.com/in/rebecca-biju/',
        bgColour: 'linkedInBlue'
	},
	{
		id: 3,
		icon: <HiOutlineMail />,
		url: 'mailto: rebeccabiju@gmail.com',
        bgColour: 'mailPink'
	}
];

const Footer = () => {
  return (
    <>
    <div name="contact" className="my-20 text-[#1e3751]">
			<div className="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full sm:pt-10 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-bold text-[#1e3751] flex flex-col justify-center items-center mb-5 sm:mb-[55px]">
					<p className="text-3xl sm:text-4xl text-[#1e3751] mb-5">
						Contact me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className={`text-white bg-${link.bgColour} hover:bg-gray-100 hover:text-[#1e3751] cursor-pointer rounded-lg shadow-sm p-4 duration-300`}
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

			</div>
		</div>
        {/* Copyright */}
        <div className="w-[100%] text-[#1e3751] bg-[#f0f0f0] p-5 ">
        <div className='text-xs sm:text-base flex flex-row  justify-between items-center text-center'>
                <div>&copy; {new Date().getFullYear()} Copyright</div><br/>
                <div>Made with ReactJS & Tailwind CSS</div><br/>
                <div>By Rebecca Biju</div>
        </div>
    </div>
    </>
  )
}

export default Footer