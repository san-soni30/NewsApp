import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {

   render() {
      return (
         <div>
            <nav className="navbar navbar-expand-lg  bg-danger">
               <div className="container-fluid">
                  <Link className="navbar-brand d-flex align-items-center" to="/"><img src="logo.png" alt="Logo" width="50" height="40" className="d-inline-block align-text-top" />
                     <span className="ms-2 fs-2 fw-bold name-link-custom ">NationalNews</span></Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <Link className="nav-link nav-link-custom fs-5" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link nav-link-custom fs-5" to="/about">About</Link>
                        </li>
                        <li class="nav-item dropdown">
                           <Link class="nav-link nav-link-custom  dropdown-toggle fs-5 fc-" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Categories
                           </Link>
                           <ul class="dropdown-menu">
                              <li className="nav-item">
                                 <Link className="nav-link nav-link-custom fs-5" to="/business">Business</Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link nav-link-custom fs-5" to="/entertainment">Entertainment</Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link nav-link-custom fs-5" to="/health">Health</Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link nav-link-custom fs-5" to="/science">Science</Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link nav-link-custom fs-5" to="/sports">Sports</Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link nav-link-custom fs-5" to="/technology">Technology</Link>
                              </li>
                           </ul>
                        </li>

                     </ul>
                  </div>
               </div>
            </nav>
         </div>
      )
   }
}

export default Navbar

