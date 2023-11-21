// TODO : create header component. That should have the logo and a navbar

// navbar should have these links: About Me, Portfolio, Contact, Resume
// The title corresponding to the current section is highlighted

// when the portfolio is loaded for the first time, then the about me title and section are selected by default

import React, { useState, useEffect, useRef } from 'react';
import Auth from '../utils/auth';
import {Button} from 'react-bootstrap';
import LoginModal from './LoginModal';



function Header({currentPage, handlePageChange}) {

    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const aboutRef = useRef(null);
    const loginRef = useRef(null);

    const toggleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
    }

    const closeLoginModal = () => setShowLoginModal(false);

    useEffect(()=>{
        const handleOutsideClick = (event) => {
            if(aboutRef.current && !aboutRef.current.contains(event.target)){
                closeAbout();
            }

            if(loginRef.current && !loginRef.current.contains(event.target)){
                closeLogin();
            }
        }

        document.body.addEventListener('click', handleOutsideClick);

        return ()=> {
            document.body.removeEventListener('click', handleOutsideClick);
        }
    })
    
    const toggleLogin = () => {
        setLoginOpen(!isLoginOpen);
    }

    const closeLogin = () => {
        setLoginOpen(false)
    }

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
                    <li className="nav-item dropdown " ref={aboutRef}>
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
                            closeAbout();
                            }}
                            className={`dropdown-item ${currentPage === "About" ? "active" : ""}`}
                        >
                            <b>Who Am I</b>
                        </a>
                        <a
                            href="#portfolio"
                            onClick={() => {
                            handlePageChange("Portfolio");
                            closeAbout();
                            }}
                            className={`dropdown-item ${currentPage === "Portfolio" ? "active" : ""}`}
                        >
                            <b>Portfolio</b>
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
                        
                        <li className="nav-item" ref={loginRef}>
                        <a onClick={() => {
                            toggleLogin();
                        }}
                        className={`nav-link dropdown-toggle ${currentPage === "Login" || currentPage === "Signup" ? "active" : ""}`} >
                        Login/Signup
                        </a>
                        <div className={`dropdown-menu ${isLoginOpen ? 'show bg-secondary border-4' : ''}`} aria-labelledby="aboutDropdown">
                        <a 
                        className='dropdown-item'
                        onClick={()=>{
                            toggleLoginModal();
                        }}
                        >
                            <b>Login</b>
                        </a>
                        <LoginModal show={showLoginModal} handleClose={closeLoginModal} />
                        <a
                            href="#signup"
                            onClick={() => {
                            handlePageChange("Signup");
                            closeLogin();
                            }}
                            className={`dropdown-item ${currentPage === "Signup" ? "active" : ""}`}
                        >
                            <b>Create Account</b>
                        </a>
                        </div>
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