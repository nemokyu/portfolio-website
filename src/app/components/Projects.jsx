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
    deployLink: "https://nemokyu.github.io/Simon-Interactive-Game/",
  },
  {
    id: 2,
    title: "Feedback Evalution via Automated Testing",
    description: "Autopmnated test-case generator built using Java",
    image: "/images/projects/feat.png",
    gitUrl: "",
    deployLink: "https://nemokyu.github.io/Simon-Interactive-Game/",
    desc: (<p className="text-white"> 
              This project was completed as part of 
              <a href="https://courses.rice.edu/admweb/!SWKSCAT.cat?p_action=COURSE&p_term=201410&p_crn=17062" className="text-blue-300 hover:text-white hover:underline">Program Design course at Rice Univ</a>. 
              Hence, source code cannot be shared due to confidentiality reasons. 
              But be sure to check out 
              <a href="https://nemokyu.github.io/Simon-Interactive-Game/" className="text-blue-300 hover:text-white hover:underline"> 
                <b className="text-blue-300">Program Design Report</b>
              </a> I have made!
              </p>),
  },
  {
    id: 3,
    title: "Interactive Simon Game",
    description: "developed using JavaScript to practice my understanding of event listener, audioPlayer and for fun :)",
    image:"/images/projects/simonGame.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nemokyu/Simon-Interactive-Game.git",
    deployLink: "https://nemokyu.github.io/Simon-Interactive-Game/",

  },
  // {
  //   id: 4,
  //   title: "Lunch Scheduler App",
  //   description: "Project 4 description",
  //   image: "/images/placeholder.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   deployLink: "https://nemokyu.github.io/Simon-Interactive-Game/",

  // },
  // {
  //   id: 5,
  //   title: "One project in C",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/placeholder.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   deployLink: "https://nemokyu.github.io/Simon-Interactive-Game/",

  // },
  // {
  //   id: 6,
  //   title: "Hahha",
  //   description: "Project 5 description",
  //   image: "/images/placeholder.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   deployLink: "https://nemokyu.github.io/Simon-Interactive-Game/",

  // },
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
    <section className= "prof-absolute bottom-4 flex h-screen justify-center items-center" id="projects">
       
      <div className="">
        <h2 className=" text-center md:text-4xl font-bold text-white mt-8 mb-8 md:mb-12 font-mononoki">
        𓆝 𓆟 𓆞 𓆝 𓆟 My Projects  𓆝 𓆟 𓆞 𓆝 𓆟
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