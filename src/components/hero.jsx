import React from "react";

const Hero = () => {
  const handleOpenNewTab = (url) => {
    window.open(url,"_blank","noopener, noreferrer");
  };
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src={process.env.PUBLIC_URL+'./assets/soyeon_photo.jpg'} className="max-w-sm rounded-lg shadow-2xl mask mask-circle" />
    <div>
      <h1 className="text-5xl font-bold">Front end Developer</h1>
      <p className="py-6">
      As a versatile Front-end Developer with an extensive background in International trade and business administration do I bring with me unique and sought-after skill sets for the field of responsive web development.
       I am excited to work in a team and apply my expertise to improve user experience and convey information effectively.
      </p>
      <button className="btn btn-custom bg-pink-500 border border-red-500 hover:bg-pink-300 hover:border-pink-700" onClick={()=> handleOpenNewTab("https://github.com/Soylatte") }>GitHub</button>
    </div>
  </div>
</div>
  )
}

export default Hero;