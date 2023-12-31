"use client";
import Image from "next/image";

const AboutSection = () => {

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-6 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src= "/images/mainPhoto.jpg" width={500} height={500} className="col-span-2 rounded-full"/>
        <div className="col-span-4 mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        


          <p className="text-base text-[#ADB7BE] font-mononoki">  
              As a <span className="text-white">Computer Science</span> and <span  className="text-white">Statistics</span> major at Rice University, with a minor in Data Science,
              my academic journey began in Mongolia, where I developed a deep-rooted passion for problem-solving.
              This passion naturally evolved into a keen interest in technology, particularly in the realms of 
              software development, data analysis, and machine learning.
          </p>
          <br />
          <p className="text-base text-[#ADB7BE] font-mononoki">
              At RiceApps, I'm honing my skills as a Full-stack Software Developer,
              where my work involves creating impactful and efficient software solutions for Houston community.
              <br />
              On top of that, I am deeply inspired by designs that are aesthetically pleasing, creative, and user-centric.
              In my role as a <span  className="text-white">UX Assistant</span> at Fondren Library, I focus on enhancing the user experience, specifically for the Study Room Reservation System.
          </p>
          <br />
          <p className="text-base text-[#ADB7BE] font-mononoki">
              When I'm not studying or coding, I like to calligraphy, doodle, make nail art, and crochet. If I'm not at my desk I like to run, play volleyball, thrift,
              and film/edit Youtube videos. <a href="https://www.youtube.com/channel/UCURQfb9WfX33dvFcIYrN_nw" className="text-[#93A5CF] hover:text-white">Check out my Youtube!</a>
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;