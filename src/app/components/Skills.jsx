"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SkillCard from "./SkillCard";


const skillsData = [
    { src: "/skills/css.png", alt: "CSS" },
    { src: "/skills/figma.png", alt: "Figma" },
    { src: "/skills/graphql.png", alt: "GraphQL" },
    { src: "/skills/html.png", alt: "HTML" },
    { src: "/skills/java.png", alt: "Java" },
    { src: "/skills/javaScript.png", alt: "JavaScript" },
    { src: "/skills/mongodb.png", alt: "MongoDB" },
    { src: "/skills/node.png", alt: "Node.js" },
    { src: "/skills/python.png", alt: "Python" },
    { src: "/skills/r.png", alt: "R" },
    { src: "/skills/react.png", alt: "React" },
    { src: "/skills/swift.png", alt: "Swift" },
    { src: "/skills/tailwind.png", alt: "Tailwind CSS" },
    { src: "/skills/typeScript.png", alt: "TypeScript" },
    // ... continue for other skill objects
  ];
  
const Skills = () => {
    // motion starter
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
  
    const cardVariants = {
      initial: { y: 50, opacity: 0.5 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section id="projects">
        
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 ">
         Tech Skills 
        </h2>
        <ul ref={ref} className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
                <SkillCard src={skill.src} alt={skill.alt} />           
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Skills;