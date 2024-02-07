import React from "react";
import { motion } from 'framer-motion'

const Projects = () => {


  
    return (
      <>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
      transition: { delay: 0.1 },
      }}
      id="Projects">
      <span className="font-bold text-4xl flex justify-center items-center">Projects</span>
      <br />
      <br />
      <div className='flex-nowrap gap-7 flex justify-center items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={process.env.PUBLIC_URL+'./assets/socar.preview.png'} alt='socar' /></figure>
      <div className="card-body">
        <h2 className="card-title">
          socar - Rent car website
        </h2>
        <p>Showcase available cars on rent car website</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Next.js</div> 
          <div className="badge badge-outline">REST API</div>
          <div className="badge badge-outline">Tailwind CSS</div>
          <div className="badge badge-outline">TypeScript</div>
        </div>
         {/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn">Detail</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Project Description</h3>
    <p className="py-4">
      What i did
      <li>
      Implemented server-side rendering to display the details of the cars</li>
      <li>available for borrowing with a limit on the number of cars the user can view when clicking 'show more'.</li>
      <li>This ensured a smooth user experience and efficient.</li>
      <br/>
      What i learned
      <li>Through this project, I have gained a comprehensive understanding of Typescript and server-side rendering.</li>
      </p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
      </div>
      
    </div>


<div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={process.env.PUBLIC_URL+'./assets/Hej.preview.png'} alt='hej' /></figure>
<div className="card-body">
  <h2 className="card-title">
    Hej - A cafe information website
  </h2>
  <p>I developed a website for a newly opened cafe using the client-side rendering of React.</p>
  <div className="card-actions justify-end">
    <div className="badge badge-outline">React.js</div> 
    <div className="badge badge-outline">Bootstrap 5</div>
  </div>
  {/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn">Detail</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Project Description</h3>
    <p className="py-4">
      What i did
      <li>
      I implemented the 'Join the Waitlist' feature using Blank Street Coffee's website as a guide.</li>
      <li>A modal window will now be displayed when the button is pressed.</li>
      <li>A responsive website guarantees mobile-readiness.</li>
      <br/>
      What i learned
      <li>Through this project, I have gained a comprehensive understanding of Typescript and server-side rendering.</li>
      </p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
</div>

</div>

<div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={process.env.PUBLIC_URL+'./assets/portfolio.preview.png'} alt='portfolio' /></figure>
<div className="card-body">
  <h2 className="card-title">
    Portfolio - Showcases the projects I worked on
  </h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div className="card-actions justify-end">
    <div className="badge badge-outline">React.js</div> 
    <div className="badge badge-outline">Tailwind CSS</div>
    <div className="badge badge-outline">Framer motion</div>
  </div>
</div>
</div>
</div>
</motion.div>
</> 

    )

}

export default Projects;