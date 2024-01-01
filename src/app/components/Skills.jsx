"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SkillCard from "./SkillCard";


const skillsData = [
    { src: "/skills/html.png", alt: "HTML" },
    { src: "/skills/javaScript.png", alt: "JavaScript" },
    { src: "/skills/css.png", alt: "CSS" },
    { src: "/skills/python.png", alt: "Python" },
    { src: "/skills/java.png", alt: "Java" },
    { src: "/skills/swift.png", alt: "Swift" },
    { src: "/skills/react.png", alt: "React" },
    { src: "/skills/R.png", alt: "R" },
    { src: "/skills/mongodb.png", alt: "MongoDB" },
    { src: "/skills/node.png", alt: "Node.js" },
    { src: "/skills/tailwind.png", alt: "Tailwind CSS" },
    { src: "/skills/typeScript.png", alt: "TypeScript" },
    { src: "/skills/figma.png", alt: "Figma" },
    // ... continue for other skill objects
  ];
  
const Skills = () => {
    // motion starter
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
  
    const cardVariants = {
      initial: { y: 50, opacity: 0.2 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section className=" flex-col z-0" id="projects">
        
        <h2 className=" text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 ">
         Tech Skills 
        </h2>
        <ul ref={ref} className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.1, delay: index * 0.1 }}
            >
                <SkillCard src={skill.src} alt={skill.alt} />           
            </motion.li>
          ))}
        </ul>
        <div className="items-center flex justify-center pt-2">
        <div className="hidden lg:block bg-gradient-to-t
             from-blue-800 via-transparent to-transparent 
             rounded-full h-40 w-40 blur-lg hover:from-gray-700 hover:bg-gradient-to-b">
             </div>

        </div>

      </section>
    );
  };
  
  export default Skills;