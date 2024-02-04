import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header className="bg-base-100 rounded-box">
            <nav className="navbar bg-base-100">
                <Link to='/' className="btn btn-ghost text-xl">Soyeon Kim</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}

export default Navbar;