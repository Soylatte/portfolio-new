import React from "react";
import { motion } from 'framer-motion'

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
            <div className='grid grid-cols-4 gap-4 object-contain justify-center place-items-center'>
            <img src={process.env.PUBLIC_URL+'./assets/html.png'} alt='html' className="object-scale-down h-48 w-20 justify-center"/>
            <img src={process.env.PUBLIC_URL+'./assets/css.png'} alt='css' className="object-scale-down h-48 w-20 justify-center"/>
            <img src={process.env.PUBLIC_URL+'./assets/js.png'} alt='js' className="object-scale-down h-48 w-20 justify-center"/>
            <img src={process.env.PUBLIC_URL+'./assets/reactjs.png'} alt='react' className="object-scale-down h-48 w-20 justify-center"/>
            <img src={process.env.PUBLIC_URL+'./assets/bootstrap.png'} alt='bootstrap' className="object-scale-down h-48 w-20 justify-center"/>
            <img src={process.env.PUBLIC_URL+'./assets/tailwind.png'} alt='tailwind' className="object-scale-down h-48 w-20 justify-center"/>
            <img src={process.env.PUBLIC_URL+'./assets/typescript.png'} alt='typescript' className="object-scale-down h-48 w-20 justify-center"/>
            <img src={process.env.PUBLIC_URL+'./assets/nextjs.png'} alt='next' className="object-scale-down h-48 w-20 justify-center"/>
            </div>

            <h2 className="font-bold flex justify-center text-xl">Backend</h2>
            <div className="object-contain grid grid-cols-4 gap-4 items-center place-items-center">
            <img src={process.env.PUBLIC_URL+'./assets/node.png'} alt='node' className="object-scale-down h-48 w-20 justify-center"/>
            <img src={process.env.PUBLIC_URL+'./assets/git.png'} alt='git' className="object-scale-down h-48 w-20 justify-center"/>
            <img src={process.env.PUBLIC_URL+'./assets/github.png'} alt='github' className="object-scale-down h-48 w-20 justify-center"/>
            </div>
            </motion.div>



        </>
    )
}

export default Skills;