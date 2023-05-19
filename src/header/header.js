import React from 'react';
import logo from './logo.jpg';
import { Link } from 'react-scroll';
import './header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container mt-2 mb-0">
        <img src={logo} alt="" className="logo-image" />
      </div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor:'#f9b316', width:'100%'}}>

        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link fs-3"
                  to="component1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fs-3"
                  to="component2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fs-3"
                  to="component3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Donate Now
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fs-3"
                  to="component4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fs-3"
                  to="component5"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
