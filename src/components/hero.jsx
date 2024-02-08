import React from "react";
import { motion } from 'framer-motion'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Hero = () => {
  const handleOpenNewTab = (url) => {
    window.open(url,"_blank","noopener, noreferrer");
  };
  return (
    <>
      <motion.div className="hero min-h-screen"
      animate={{ y: 100 }}
      transition={{ type: "spring" }} id="Hero"
      >
        <div className="hero-content flex-col lg:flex-row">
          <img src={process.env.PUBLIC_URL + './assets/soyeon_photo.jpg'} className="max-w-sm rounded-lg shadow-2xl mask mask-circle" />
          <div>
            <h1 className="text-5xl font-bold">Front end Developer</h1>
            <p className="py-6">
              As a versatile Front-end Developer with an extensive background in International trade and business administration do I bring with me unique and sought-after skill sets for the field of responsive web development.
              I am excited to work in a team and apply my expertise to improve user experience and convey information effectively.
            </p>
            <div className="flex items-stretch">
            <FaLinkedin size={30} className="cursor-pointer" onClick={() => handleOpenNewTab("https://www.linkedin.com/in/soyeon-kim-4aa971209/")}/>
            <IoLogoGithub size={30} className="cursor-pointer" onClick={() => handleOpenNewTab("https://github.com/Soylatte")} />
            </div>
          </div>
        </div>
      </motion.div>
      </>
  )
}

export default Hero;