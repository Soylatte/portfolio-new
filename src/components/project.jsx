import React from "react";

const Projects = () => {
    return (
      <>
      <span className="font-bold">Projects</span>
      <div className='flex flex-nowrap gap-7'>
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={process.env.PUBLIC_URL+'./assets/socar.preview.png'} alt='socar' /></figure>
      <div className="card-body">
        <h2 className="card-title">
          socar - Rent car website
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Next.js</div> 
          <div className="badge badge-outline">REST API</div>
          <div className="badge badge-outline">Tailwind CSS</div>
          <div className="badge badge-outline">TypeScript</div>
        </div>
      </div>
    </div>

<div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={process.env.PUBLIC_URL+'./assets/Hej.preview.png'} alt='hej' /></figure>
<div className="card-body">
  <h2 className="card-title">
    Hej - A cafe information website
  </h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div className="card-actions justify-end">
    <div className="badge badge-outline">React.js</div> 
    <div className="badge badge-outline">Bootstrap 5</div>
  </div>
</div>
</div>
</div>
</> 
    )
}

export default Projects;