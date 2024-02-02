import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <header>
            <nav className="navbar">
                <Link to='/'>Soyeon Kim</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}

export default Navbar;