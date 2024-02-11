import React from "react";
import { motion } from 'framer-motion'
import { IoLogoGithub } from "react-icons/io";
import { IoIosLink } from "react-icons/io";

const Projects = () => {
  const handleOpenNewTab = (url) => {
    window.open(url,"_blank","noopener, noreferrer");
  };

    return (
      <>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
      transition: { delay: 0.1 },
      }}
      id="Projects"className="flex flex-col items-center">
      <span className="font-bold text-4xl flex divider">PROJECTS</span>
      <br />
      <br />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7'>
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={process.env.PUBLIC_URL+'./assets/socar.preview.png'} alt='socar' /></figure>
      <div className="card-body">
        <h2 className="card-title">
          socar Rent car website
        </h2>
        <p>Showcase available cars on rent car website</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Next.js</div> 
          <div className="badge badge-outline">REST API</div>
          <div className="badge badge-outline">Tailwind CSS</div>
          <div className="badge badge-outline">TypeScript</div>
        </div>
        <div className="flex gap-4">
        <IoIosLink onClick={() => handleOpenNewTab("https://rent-car-app-flame.vercel.app/")} className="cursor-pointer justify-center " size={30}/>
        <IoLogoGithub onClick={() => handleOpenNewTab("https://github.com/Soylatte/rent-car-app")} className="cursor-pointer justify-center" size={30}/>
        </div>
      </div>
    </div>


<div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={process.env.PUBLIC_URL+'./assets/Hej.preview.png'} alt='hej' /></figure>
<div className="card-body">
  <h2 className="card-title">
    Hej cafe website
  </h2>
  <p>A website for a newly opened cafe using the client-side rendering of React.</p>
  <div className="card-actions justify-end">
    <div className="badge badge-outline">React.js</div> 
    <div className="badge badge-outline">Bootstrap 5</div>
  </div>
  <div className="flex gap-4">
  <IoIosLink onClick={() => handleOpenNewTab("https://splendid-khapse-209576.netlify.app/")} className="cursor-pointer" size={30}/>
        <IoLogoGithub onClick={() => handleOpenNewTab("https://github.com/Soylatte/Hej-cafe-web")} className="cursor-pointer" size={30}/>
</div>
</div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={process.env.PUBLIC_URL+'./assets/portfolio.preview.png'} alt='portfolio' /></figure>
<div className="card-body">
  <h2 className="card-title">
    Portfolio
  </h2>
  <p>Display all my projects I worked on</p>
  <div className="card-actions justify-end">
    <div className="badge badge-outline">React.js</div> 
    <div className="badge badge-outline">Tailwind CSS</div>
    <div className="badge badge-outline">Framer motion</div>
  </div>


<div className="flex gap-4">
  <IoIosLink onClick={() => handleOpenNewTab("https://github.com/Soylatte/Hej-cafe-web")} className="cursor-pointer" size={30}/>
        <IoLogoGithub  onClick={() => handleOpenNewTab("https://github.com/Soylatte/portfolio-new")} className="cursor-pointer" size={30}/>
</div>
</div>
</div>
</div>
</motion.div>
</>

    )

}

export default Projects;