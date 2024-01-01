"use client";
import Image from "next/image";

const AboutSection = () => {

  return (
    <section className="text-white " id="about">
      <div className="md:grid md:grid-cols-6 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src= "/images/mainPhoto.jpg" alt="My pictiure" width={500} height={500} className="col-span-2 rounded-full"/>
        <div className="col-span-4 mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        


          <p className="text-base text-[#ADB7BE] font-mononoki">  
              As a <span className="text-white">Computer Science</span> and <span  className="text-white">Statistics</span> major at Rice University, with a minor in Data Science,
              my academic journey began in <a className= "text-[#ff8b9c] hover:text-white" href="https://www.google.com/search?q=mongolia&rlz=1C5CHFA_enMN969MN970&oq=mongolia&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMg0IAhAuGNQCGLEDGIAEMgoIAxAuGLEDGIAEMgoIBBAAGLEDGIAEMg0IBRAuGIMBGLEDGIAEMg0IBhAAGIMBGLEDGIAEMgYIBxBFGDzSAQgzMTMyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">
                  Mongolia </a>,
              where I developed a deep-rooted passion and critical thinking for problem-solving.
              This passion naturally evolved into a keen interest in technology in the realms of software development,and
              data analysis. I am particularly fascinated by the elegant simplicity with which data and algorithms can optimize resources 
              and ultimately make impacts in our everyday life.

          </p>
          <br />
          <p className="text-base text-[#ADB7BE] font-mononoki">
              At RiceApps, I&apos;m honing my skills as a Full-stack Software Developer,
              where my work involves creating impactful and efficient software solutions for Houston community.
              <br />
              On top of that, I am deeply inspired by designs that are aesthetically pleasing, creative, and user-centric.
              In my role as a <span  className="text-[#afecb0]">UX Assistant</span> at Fondren Library, I focus on enhancing the user experience, specifically for the Study Room Reservation System.
          </p>
          <br />
          <p className="text-base text-[#ADB7BE] font-mononoki">
              When I&apos;m not studying or coding, I like to calligraphy, doodle, make nail art, and crochet. If I&apos;m not at my desk I like to run, play volleyball, thrift,
              and film/edit Youtube videos. <a href="https://www.youtube.com/channel/UCURQfb9WfX33dvFcIYrN_nw" className="text-[#93A5CF] hover:text-white">Check out my Youtube!</a>
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;