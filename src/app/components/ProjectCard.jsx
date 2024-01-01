import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


const ProjectCard = ({ imgUrl, title, description, gitUrl, deployLink, desc }) => {
  return (
    <div>
      <div
        className="h-32 md:h-42 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {
            gitUrl === "" ?
              desc :
              <Link
                target="_blank" rel="noopener noreferrer"
                href={gitUrl}
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
              </Link>
          }
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-2 px-4">
        <a target="_blank" rel="noopener noreferrer"
           href={deployLink} className="text-white hover:text-[#ADB7BE]">
          <h5 className="text-xl font-semibold mb-2">{title} ➫</h5>
        </a>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      
    </div>
  );
};


export default ProjectCard;