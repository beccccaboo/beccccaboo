import React from 'react'
import HTML from '../assets/html.png'
import AWS from '../assets/aws.png'
import CSS from '../assets/css.png'
import Github from '../assets/github.png'
import Java from '../assets/java.png'
import Javascript from '../assets/javascript.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import reactJS from '../assets/react.png'
import Figma from '../assets/figma.png'
import Terraform from '../assets/terraform.png'


const Skills = () => {
  return (
    <div name = 'skills' className='text-[#1e3751] md:min-h-screen'>
        <div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-[#C3073F] inline'>Skills</p>
                <p className='py-4'>Some of the technologies I'm familiar with</p>
            </div>
        

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 m-1'>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md'>
                    <img className='mt-4 w-20 mx-auto' src={HTML} alt='HTML'></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md'>
                    <img className='mt-4 w-20 mx-auto' src={CSS} alt='CSS'></img>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md'>
                    <img className='mt-4 w-20 mx-auto' src={Javascript} alt='JavaScript'></img>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md'>
                    <img className='mt-4 w-20 mx-auto' src={Java} alt='Java'></img>
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md'>
                    <img className='mt-4 w-20 mx-auto' src={AWS} alt='AWS'></img>
                    <p className='my-4'>AWS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md'>
                    <img className='mt-4 w-20 mx-auto' src={Node} alt='NodeJS'></img>
                    <p className='my-4'>NodeJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md'>
                    <img className='mt-4 w-20 mx-auto' src={Mongo} alt='MongoDB'></img>
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md'>
                    <img className='mt-4 w-20 mx-auto' src={reactJS} alt='ReactJS'></img>
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md'>
                    <img className='mt-4 w-20 mx-auto' src={Github} alt='ReactJS'></img>
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md'>
                    <img className='mt-4 w-20 mx-auto' src={Terraform} alt='ReactJS'></img>
                    <p className='my-4'>Terraform</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md'>
                    <img className='mt-4 w-20 mx-auto' src={Figma} alt='ReactJS'></img>
                    <p className='my-4'>Figma</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills