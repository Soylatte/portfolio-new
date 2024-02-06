import React from "react";
import { motion } from 'framer-motion'

const Skills = () => {

    return(
       <>
       <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       exit={{opacity:0}}>

            <span className="font-bold justify-center">📑 SKILLS</span>
            <h1 className="font-bold justify-center">Frontend</h1>
            <div className='grid grid-cols-4 gap-4 object-contain'>
            <img src={process.env.PUBLIC_URL+'./assets/html.png'} alt='html' className="object-scale-down h-48 w-20"/>
            <img src={process.env.PUBLIC_URL+'./assets/css.png'} alt='css' className="object-scale-down h-48 w-20"/>
            <img src={process.env.PUBLIC_URL+'./assets/js.png'} alt='js' className="object-scale-down h-48 w-20"/>
            <img src={process.env.PUBLIC_URL+'./assets/reactjs.png'} alt='react' className="object-scale-down h-48 w-20"/>
            <img src={process.env.PUBLIC_URL+'./assets/bootstrap.png'} alt='bootstrap' className="object-scale-down h-48 w-20"/>
            <img src={process.env.PUBLIC_URL+'./assets/tailwind.png'} alt='tailwind' className="object-scale-down h-48 w-20"/>
            <img src={process.env.PUBLIC_URL+'./assets/typescript.png'} alt='typescript' className="object-scale-down h-48 w-20"/>
            <img src={process.env.PUBLIC_URL+'./assets/nextjs.png'} alt='next' className="object-scale-down h-48 w-20"/>
            </div>

            <h2 className="font-bold">Backend</h2>
            <div className="object-contain grid grid-cols-4 gap-4">
            <img src={process.env.PUBLIC_URL+'./assets/node.png'} alt='node' className="object-scale-down h-48 w-20"/>
            <img src={process.env.PUBLIC_URL+'./assets/git.png'} alt='git' className="object-scale-down h-48 w-20"/>
            <img src={process.env.PUBLIC_URL+'./assets/github.png'} alt='github' className="object-scale-down h-48 w-20"/>
            </div>
            </motion.div>



        </>
    )
}

export default Skills;