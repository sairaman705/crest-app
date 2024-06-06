import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className="header">
            <nav className="nav">
                <NavLink to="/" className="nav_logo">
                    Crest
                </NavLink>

                <div className={`nav_menu ${menuActive ? "active" : ""}`} id="nav-menu">
                    <div className="nav_close" id="nav-close" onClick={toggleMenu}>
                        <i className='bx bx-x'></i>
                    </div>
                    <ul className="nav_list">
                        <li className="nav_item">
                            <NavLink to="/product" className="nav_link" onClick={toggleMenu}>
                                Product
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/pricing" className="nav_link" onClick={toggleMenu}>
                                Pricing
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/industry" className="nav_link" onClick={toggleMenu}>
                                Industry
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/customer stories" className="nav_link" onClick={toggleMenu}>
                                Customer Stories
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/about" className="nav_link" onClick={toggleMenu}>
                                About
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/blog" className="nav_link" onClick={toggleMenu}>
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="nav_list">
                        <li className="nav_item">
                            <NavLink to="/login" className="nav_link" onClick={toggleMenu}>
                                Login
                            </NavLink> 
                        </li>
                        
                    </ul>
                    <button className="button">
                        <NavLink to="/talk" className="talk_button" onClick={toggleMenu}>
                            Talk to Us
                        </NavLink>
                    </button>
                </div>

                <div className="nav_toogle" id="nav-toogle" onClick={toggleMenu}>
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
