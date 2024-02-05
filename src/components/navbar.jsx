import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header className="bg-white rounded-box">
            <nav className="navbar bg-white">
                <Link to='/' className="btn btn-ghost text-xl">Soyeon Kim</Link>
                <div className="space-between gap-5">
                <Link to='/skills'>Skills</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;