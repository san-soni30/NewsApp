import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bg-danger">
                <div className="container-fluid">
                    
                    {/* Brand Logo */}
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        
                        <span className="ms-2 fs-2 fw-bold name-link-custom">NeoNews</span>
                    </Link>

                    {/* Toggler for mobile */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link nav-link-custom fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-custom fs-5" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link nav-link-custom dropdown-toggle fs-5" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                </ul>
                            </li>
                        </ul>

                        {/* Social Media Icons */}
                        <div className="d-flex">
                            <div className="icon-container">
                                <Link className="btn text-white btn-floating m-1" to="/" role="button">
                                    <i className="fab fa-facebook-f"></i>
                                    <span className="tooltip-text">Follow us on Facebook</span>
                                </Link>
                            </div>

                            <div className="icon-container">
                                <Link className="btn text-white btn-floating m-1" to="/" role="button">
                                    <i className="fab fa-twitter"></i>
                                    <span className="tooltip-text">Follow us on Twitter</span>
                                </Link>
                            </div>

                            <div className="icon-container">
                                <Link className="btn text-white btn-floating m-1" to="/" role="button">
                                    <i className="fab fa-google"></i>
                                    <span className="tooltip-text">Follow us on Google</span>
                                </Link>
                            </div>

                            <div className="icon-container">
                                <Link className="btn text-white btn-floating m-1" to="/" role="button">
                                    <i className="fab fa-instagram"></i>
                                    <span className="tooltip-text">Follow us on Instagram</span>
                                </Link>
                            </div>

                            <div className="icon-container">
                                <Link className="btn text-white btn-floating m-1" to="/" role="button">
                                    <i className="fab fa-linkedin-in"></i>
                                    <span className="tooltip-text">Follow us on LinkedIn</span>
                                </Link>
                            </div>

                            <div className="icon-container">
                                <Link className="btn text-white btn-floating m-1" to="/" role="button">
                                    <i className="fab fa-github"></i>
                                    <span className="tooltip-text">Follow us on GitHub</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
