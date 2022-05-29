import "./Navbar.css";

// import BrandLogo from "../BrandLogo";

// import googlePlayBadge from "../../../assets/images/google-play-badge.png";
import iconMenu from "../../assets/images/icon-menu.png";
import iconClose from "../../assets/images/icon-close.png";

import { useState } from "react";
import {NavLink } from "react-router-dom";



const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="LandingNavbar">
      {/* <BrandLogo /> */}
      {/* <div
        className='BrandLogo'
        onClick={() => {
            props.history.push('/');
        }}
        >
        <img src={parkingPointLogo} alt='brand logo' />
        <h2>
            <span>Auto</span>-Proctor
        </h2>
      </div> */}🤖
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home 🏠
          </NavLink>
        </li>
        <li>
          <a href="https://watchx-ai.herokuapp.com/" target="_blank">🧑‍💻 WatchX.ai 🧑‍💻</a>
        </li>
      </ul>

      <div className="menu">
        <img
          className="close-btn"
          onClick={() => {
            document.getElementsByClassName("menu")[0].style.width = "0";
            setIsMenuOpen(false);
          }}
          src={iconClose}
        />
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Home 🏠
            </NavLink>
          </li>
          <li>
            <li>
              <a href="http://checker121.herokuapp.com/" target="_blank">🧑‍💻 WatchX.ai 🧑‍💻</a>
            </li>
          </li>

        </ul>
      </div>

      {!isMenuOpen && (
        <img
          onClick={() => {
            document.getElementsByClassName("menu")[0].style.width = "70%";
            setIsMenuOpen(true);
          }}
          src={iconMenu}
          className="menu-btn"
        ></img>
      )}
    </nav>
  );
};

export default Navbar;