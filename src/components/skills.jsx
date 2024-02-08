import React from "react";
import { motion } from 'framer-motion'
import { MdHtml } from "react-icons/md";
import { MdOutlineCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

import { FaNode } from "react-icons/fa";
import { FaGit } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Skills = () => {

    return(
       <>
       <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 2
      }}
       id="Skills">

            <span className="font-bold  flex justify-center text-4xl">📑 SKILLS</span>
            <br />
            <h1 className="font-bold  flex justify-center text-xl">Frontend</h1>
            <div className="object-contain grid grid-cols-4 gap-4 items-center place-items-center">
            <MdHtml size={50}/>
            <MdOutlineCss  size={50}/>
            <IoLogoJavascript size={50} />
            <IoLogoReact size={50} />
            <SiTypescript  size={50}/>
            <SiNextdotjs size={50}/>
            <RiBootstrapLine size={50} />
            <SiTailwindcss size={50}/>
            </div>
            <br/><br/><br/>
            <h2 className="font-bold flex justify-center text-xl">Backend</h2>
            <div className="object-contain grid grid-cols-4 gap-4 items-center place-items-center">
           <FaNode size={50}/>
           <FaGit  size={50}/>
           <FaGithub size={50} />
            </div>
            </motion.div>



        </>
    )
}

export default Skills;