"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "This responsive portfolio website was developed using React, Next.js, TailwingCSS, Framer Motion ",
    image: "/images/projects/portfolioWeb.png",
    gitUrl: "https://github.com/nemokyu/portfolio-website.git",
    deployLink: "https://nominganzoo.com/",
  },
  {
    id: 2,
    title: "Feedback Evalution via Automated Testing",
    description: "Autopmnated test-case generator built using Java",
    image: "/images/projects/feat.png",
    gitUrl: "",
    deployLink: "",
    desc: (<p className="text-white"> 
              This project was completed as part of 
              <a href="https://courses.rice.edu/admweb/!SWKSCAT.cat?p_action=COURSE&p_term=201410&p_crn=17062" className="text-blue-300 hover:text-white hover:underline">Program Design course at Rice Univ</a>. 
              Hence, source code cannot be shared due to confidentiality reasons. 
              However, 
              <a href="" className="text-blue-300 hover:text-white hover:underline"> 
                <b className="text-blue-300"> Program Design Report</b>
              </a> is coming soon ッ!
              </p>),
  },
  {
    id: 3,
    title: "Interactive Simon Game",
    description: "developed using JavaScript to practice my understanding of event listener, audioPlayer and for fun :)",
    image:"/images/projects/simonGame.png",
    gitUrl: "https://github.com/nemokyu/Simon-Interactive-Game.git",
    deployLink: "https://nemokyu.github.io/Simon-Interactive-Game/",

  },
  {
    id: 4,
    title: "Motor Vehicle Crash Data Analysis",
    description: "Super interesting Data Visualization project where we came up with our original 'Killer Plot' 🤩 where we used R and SQL for data manipulation",
    image:"/images/projects/stat405.png",
    gitUrl: "https://github.com/nemokyu/NYC-Toronto-Vehicle-Crash-Data-Analysis",
    deployLink: "/stat405_finalReport.pdf",

  },
  
  {
    id: 5,
    title: "Houston Astros Datathon Challenge",
    description: "Used Pandas, Numpy, Geopy libraries and binary classification models to determine relation between travel and performance of MBL teams",
    image:"/images/projects/astros.png",
    gitUrl: "https://github.com/nemokyu/Rice-Datathon-2024-Astros-track",
    deployLink: "https://youtu.be/OvYlotkb0JA",

  },
  {
    id: 4,
    title: "Mobile Game Apps",
    description: "iOS apps made using Swift, UI in Xcode in completion of App Development Bootcamp. Visuals coming soon!",
    image:"/images/placeholder.png",
    gitUrl: "https://github.com/nemokyu/mobile-app-games.git",
    deployLink: "https://nemokyu.github.io",

  },

];

const ProjectsSection = () => {
  // motion starter
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const cardVariants = {
    initial: { y: 50, opacity: 0.5 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className= "flex-col h-screen justify-center items-center" id="projects">
       
      <div className="">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mt-8 mb-8 md:mb-12 font-mononoki">
        <span className="hidden md:inline">𓆝  𓆟  𓆝 </span>
        My Projects
        <span className="hidden md:inline">𓆝  𓆝  𓆟</span>
      </h2>

        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                deployLink={project.deployLink}
                desc ={project.desc}
              />
            </motion.li>
          ))}
        </ul>
      </div>

    </section>
  );
};

export default ProjectsSection;