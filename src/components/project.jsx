import React from "react";

const Projects = () => {
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4">
        <span className="font-bold">My Projects</span>
        <div className="mockup-browser border bg-base-300 w-1/2 row-span-3">
  <div className="mockup-browser-toolbar">
    <div className="input">https://rent-car-app-flame.vercel.app/</div>
  </div>
  <div className="flex px-4 py-16 bg-white w-50 justify-items-center">
    <img src={process.env.PUBLIC_URL+'./assets/socar.preview.png'}/>
    </div>
</div>
<div className="justify-end row-span-2 items-center">
    <span>socar - Rent car website</span>
    <p>The project successfully implemented client and server-side rendering by utilizing the latest App component and Router provided in Next.js 14</p>
    <br/>
    <br/>
    <h1 className="col-span-2">Skills</h1>
    <div className="badge badge-secondary  badge-outline">Next.js</div>
    <div className="badge badge-secondary  badge-outline">TypeScript</div>
    <div className="badge badge-secondary  badge-outline">Tailwind CSS</div>
    <div className="badge badge-secondary  badge-outline">REST API</div>
</div>
<div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="mockup-browser border bg-base-300 w-1/2 row-span-3">
  <div className="mockup-browser-toolbar">
    <div className="input">https://splendid-khapse-209576.netlify.app/</div>
  </div>
  <div className="flex px-4 py-16 bg-white w-50 justify-items-center">
    <img src={process.env.PUBLIC_URL+'./assets/Hej.preview.png'}/>
    </div>
</div>
<div className="justify-end row-span-2 items-center gap-4">
    <span>Hej - Coffee shope opening website</span>
    <p>The project successfully implemented client and server-side rendering by utilizing the latest App component and Router provided in Next.js 14</p>
    <br/>
    <br/>
    <h1 className="col-span-2">Skills</h1>
    <div className="badge badge-secondary  badge-outline">React.js</div>
    <div className="badge badge-secondary  badge-outline">Bootstrap 5</div>
</div>
</div>
</div>
    )
}

export default Projects;