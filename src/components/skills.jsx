import React from "react";

const Skills = () => {
    return(
        <div className='container'>
            <div className="space-between gap-2">
            <span className="font-bold">📑 SKILLS</span>
            <h1 className="font-bold justify-center">Frontend</h1>
            <img src={process.env.PUBLIC_URL+'./assets/html.png'} alt="html"/>
            <img src={process.env.PUBLIC_URL+'./assets/css.png'} alt='css'/>
            <img src={process.env.PUBLIC_URL+'./assets/js.png'} alt='js'/>
            <img src={process.env.PUBLIC_URL+'./assets/reactjs.png'} alt='react'/>
            <img src={process.env.PUBLIC_URL+'./assets/bootstrap.png'} alt='bootstrap'/>
            <img src={process.env.PUBLIC_URL+'./assets/tailwind.png'} alt='tailwind'/>
            <img src={process.env.PUBLIC_URL+'./assets/typescript.png'} alt='typescript'/>
            <img src={process.env.PUBLIC_URL+'./assets/nextjs.png'} alt='next'/>
            </div>
            <div className="skill-back">
            <h2 className="font-bold">Backend</h2>
            <img src={process.env.PUBLIC_URL+'./assets/node.png'} alt='node'/>
            <img src={process.env.PUBLIC_URL+'./assets/git.png'} alt='git'/>
            <img src={process.env.PUBLIC_URL+'./assets/github.png'} alt='github'/>
            </div>


        </div>
    )
}

export default Skills;