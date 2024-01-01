"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {

  return (
    <section className="pt-20" id="contact">

      <div className="md:hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="hidden md:block  bg-gradient-to-b from-blue-900 via-transparent to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-10">

        <div className='col-span-1'>
          <h5 className="text-xl font-bold text-white my-2 ">
            Let's Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I'm seeking summer 2024 opportunities, ready to broaden my horizons and add new chapters to my professional story.
            Find me at: 
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/nemokyu">
              <Image src={GithubIcon} alt="Github Icon" className="opacity-100 hover:opacity-70" />
            </Link>
            <Link href="https://www.linkedin.com/in/nominganzoo23/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" className="opacity-100 hover:opacity-70" />
            </Link>
            <Link href="mailto: ng53@rice.edu">
              <Image src="email-icon.png" width="45" height = "45" alt="email Icon" className="opacity-100 hover:opacity-70" />
            </Link>
          </div>
        </div>

        {/* This div will only be displayed on md screens and larger */}
        <div className='flex sm:justify-end md:col-span-1'>
          <div className="inline-block">
            <Image src="icon.png" alt="Logo drawing" width="300" height="300" className="opacity-50 hover:opacity-80"/>
          </div>
        </div>
 
        </div>

    </section>
    
  )
}

export default Contact;
