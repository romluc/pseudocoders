// TODO : create header component. That should have the logo and a navbar

// navbar should have these links: About Me, Portfolio, Contact, Resume
// The title corresponding to the current section is highlighted

// when the portfolio is loaded for the first time, then the about me title and section are selected by default

import React, { useState } from 'react';
import Auth from '../utils/auth';



function Header({currentPage, handlePageChange}) {

    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    const toggleAbout = () => {
        setIsAboutOpen(!isAboutOpen);
    };

    const closeAbout = () => {
        setIsAboutOpen(false);
    };

    const user = Auth.getProfile();

    const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    };


    return (
        <div className='fluid p-4 mb-3'>
            <div className="row">
                <div className='col-8 col-md-4 col-xl-2' >                                     
                        <img className='img-fluid' src="images/pseudocoderLogoCut.png" alt="Pseudocoder Logo" />
                </div>
                                
                <ul id='menu' className= {window.innerWidth > 992 ? 'nav nav-tabs col-lg-8 col-10 justify-content-end' :'nav bg-secondary text-decoration-none text-white flex-column float-right justify-content-end collapse'}>
                    <li className="nav-item">
                        <a href="#home" 
                        onClick={() => handlePageChange("Home")}
                        className={currentPage === "Home" ? "active nav-link" : "nav-link"}
                        >Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#pseudocodes" 
                        onClick={() => handlePageChange("Pseudocodes")}
                        className={currentPage === "Pseudocodes" || currentPage === "Pseudocode" ? "active nav-link" : "nav-link"}
                        >Pseudocodes</a>
                    </li>
                    <li className="nav-item dropdown ">
                        <a
                        href="#about"
                        onClick={() => {
                            toggleAbout();
                            handlePageChange("About");
                        }}
                        className={`nav-link dropdown-toggle ${currentPage === "About" || currentPage === "Portfolio" ? "active" : ""}`}
                        >
                        About Me
                        </a>
                        <div className={`dropdown-menu ${isAboutOpen ? 'show bg-secondary border-4' : ''}`} aria-labelledby="aboutDropdown">
                        <a
                            href="#about"
                            onClick={() => {
                            handlePageChange("About");
                            closeMenu();
                            }}
                            className={`dropdown-item ${currentPage === "About" ? "active" : ""}`}
                        >
                            Who Am I
                        </a>
                        <a
                            href="#portfolio"
                            onClick={() => {
                            handlePageChange("Portfolio");
                            closeMenu();
                            }}
                            className={`dropdown-item ${currentPage === "Portfolio" ? "active" : ""}`}
                        >
                            Portfolio
                        </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" 
                        onClick={() => handlePageChange("Contact")}
                        className={currentPage === "Contact" ? "active nav-link" : "nav-link"}
                        >Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#resume" 
                        onClick={() => handlePageChange("Resume")}
                        className={currentPage === "Resume" ? "active nav-link" : "nav-link"}
                        >Resume</a>
                    </li>
                    
                    {user && (user.data.isLeo && (
                        <li className='nav-item'>
                            <a
                            href="#dashboard"
                            onClick={() => handlePageChange("Dashboard")}
                            className={currentPage === "Dashboard" ? "active nav-link" : "nav-link"}
                            >Dashboard
                            </a>
                        </li>
                    ))}
                
                {Auth.loggedIn() ? (
                        <li className='nav-item'>
                        <a onClick={logout}>
                            Logout
                        </a>
                        </li>
                    ) : (
                        
                        <li className="nav-item">
                        <a onClick={() => handlePageChange("login")}
                        className='nav-link' >
                        Login/Signup
                        </a>
                        </li>
                        
                    )}
                </ul>
                
                {window.innerWidth <= 992 && <button className="navbar-toggler btn btn-dark col" 
                type="button"
                onClick={()=>{toggleMenu()}} 
                data-bs-toggle="collapse" 
                data-bs-target="#menu" 
                aria-controls="menu" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                Menu
                </button>}                

            {/* row */}
            </div > 
            
        {/* container */}
        </div>
    )

    
};

export default Header;