"use client"
import React from 'react';
import Image from 'next/image';
import "@fontsource/mononoki/700.css"; 
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section>
        <div className ="grid grid-cols-1 sm:grid-cols-12">
            <div className ="col-span-7 place-self-center text-center sm:text-left">
                <h1 className = "text-white mb-4 sm: text-4xl sm:text-5xl sm:self-center lg:text-6xl font-extrabold font-mononoki">
                   <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#93A5CF]  to-[#E4EfE9]'>
                    Hi•ᴗ•, I'm {""}
                   </span>
                   <br />
                   <TypeAnimation
                    sequence={[
                      'Nomin Ganzorig',
                      1000,
                      'Software Developer',
                      1000,
                      'UX researcher',
                      1000,
                      'Data Analyst',
                      1000
                    ]}ß
                      wrapper="span"
                      speed={10}
                      repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-lg sm:text-lg lg:text-xl mb-6 font-mononoki'>
                    I'm a full-stack developer at <a href="https://riceapps.org/"  target="_blank" rel="noopener noreferrer" className='text-[#93A5CF] hover:text-white'>RiceApps</a>  and Computer Science, Statisics student at <a href="https://engineering.rice.edu/"  target="_blank" rel="noopener noreferrer" className='text-[#93A5CF] hover:text-white'>Rice University</a>, minoring in Data Science.
                    
                </p>
                <div >
                <button className = "px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-tr from-[#93A5CF]  to-[#E4EfE9] hover:bg-slate-200 text-white">Connect</button>
                    <button className = "px-1 py-1 rounded-full w-full sm:w-fit mr-4  bg-gradient-to-tr from-[#93A5CF]  to-[#E4EfE9]  hover:bg-slate-800 text-white mt-3"> 
                        <span className = 'block rounded-full bg-[#121212] hover:bg-slate-800 px-5 py-2'>
                            Download Resume 
                        </span>
                    </button>
                </div>
            </div>
            <div classname ="cols-span-5 place-self-center lg: mt-0">
                <div className ="rounded-full place-self-center bg-transparent w-[250px] h-[250px] lg:w-[400px] lg:h[400px] relative">
                    <Image 
                        src =
                        alt = "hero image"
                        className = "place-self-center rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width = {500}
                        height = {500}
                    />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero
