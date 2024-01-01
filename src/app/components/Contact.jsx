import React from 'react'
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <section>
        {/* <div className="bg-gradient-to-l from-blue-900 via-transparent to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
        <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for summer 2024 opportunities to further , my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </section>
    
  )
}

export default Contact;
