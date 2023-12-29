import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section>
        <div className ="grid grid-cols-1 sm:grid-cols-12">
            <div className ="col-span-7 place-self-center text-center sm:text-left">
                <h1 className = "text-white mb-4 sm: text-4xl sm:text-5xl sm:self-center lg:text-6xl font-extrabold">
                   <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#176B87] via-[#A076F9] to-[#190482]'>
                    Hello, I'm {" "}
                   </span>
                    Nomin Ganzorig
                </h1>
                <p className='text-[#ADB7BE] text-lg sm:text-lg lg:text-xl mb-6'>
                    I'm a full-stack developer and a Computer Science and Statistics student 
                    at Rice University, located in Houston, TX. Reach out to me for more information!
                </p>
                <div >
                    <button className = "px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-tr from-[#176B87] via-[#A076F9] to-[#190482] hover:bg-slate-200 text-white "> Hire me!</button>
                    <button className = "px-1 py-1 rounded-full w-full sm:w-fit mr-4  bg-gradient-to-tr from-[#176B87] via-[#A076F9] to-[#190482]  hover:bg-slate-800 text-white mt-3"> 
                        <span className = 'block rounded-full bg-[#121212] hover:bg-slate-800 px-5 py-2'>
                            Download Resume 
                        </span>
                    </button>
                </div>
            </div>
            <div classname ="cols-span-5 place-self-center lg: mt-0">
                <div className ="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h[400px] relative">
                    <Image 
                        src= "/images/hero-image.png"
                        alt = "hero image"
                        className = "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width = {300}
                        height = {300}
                    />
                </div>
                
            </div>
            
        </div>

        
    </section>
  )
}

export default Hero
