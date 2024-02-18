import React, { useState } from "react";
import "./Header.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import logo from '../../Assets/R.png'

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="nav-logo">
            <img src={logo}/>
            
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="/"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/Service1"
                className="nav-links"
                onClick={handleClick}
              >
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/Team"
                className="nav-links"
                onClick={handleClick}
              >
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/Projects"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/Career"
                className="nav-links"
                onClick={handleClick}
              >
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/Contact"
                className="nav-links"
                onClick={handleClick}
              >
                 Contact Us
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
                
                <HamburgetMenuOpen />{" "}
              </span>
            )}
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Header;
