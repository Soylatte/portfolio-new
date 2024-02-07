import React, { useState } from "react";
import { Link } from 'react-scroll';



const Navbar = () => {
    
    return(
        <header className="rounded-box">
            <nav className="navbar">
                <Link to='/'spy={true} smooth={true} className="btn btn-ghost text-xl">Soyeon Kim</Link>
                <div className="space-between gap-5 font-bold" >
                <Link to="Skills" spy={true} smooth={true} onClick={()=> {
                    window.scrollTo({
                        top:800,
                        behavior:'smooth',
                    })
                }} id="1">Skills</Link>
                <Link to="Projects" spy={true} smooth={true} onClick={()=> {
                    window.scrollTo({
                        top:700,
                        behavior:'smooth',
                    })
                }} id="2">Projects</Link>
                <Link to="Contact" spy={true} smooth={true} onClick={()=> {
                    window.scrollTo({
                        top:1000,
                        behavior:'smooth',
                    })
                }} id="3">Contact</Link>
                </div>
            </nav>
        </header>

    )
}

export default Navbar;