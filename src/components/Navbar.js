import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../style/style.css";
import logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  function clickOpen() {
    let open = document.querySelector("#open");
    let close = document.querySelector("#close");

    if (!isActive) {
      open.style.display = "none";
      close.style.display = "block";
      setActive(true);
    } else {
      open.style.display = "block";
      close.style.display = "none";
      setActive(false);
    }
  }

  const path = useLocation().pathname;
  const location = path.split("/")[1];
  console.log(location);
  console.log(document.querySelector("body"));
  const changeBackground = () => {
    if (location !== "") {
      // document.querySelector("body").className = "";
      document.querySelector("body").classList.add(location);
    } else {
      document.querySelector("body").className = "";
    }
  };
  changeBackground();

  return (
    <div className="top-nav">
      <div className="top-nav-logo">
        <img src={logo} alt="dDS" />
      </div>
      <div className="top-nav-line">
        <hr></hr>
      </div>
      {/* MOBILE NAV BAR */}
      <div id="open" className="mobile-navbar">
        <button onClick={clickOpen}>
          <img src={Close} alt="" />
        </button>
        {/* RESPONSIVE NAVBAR (MOBILE) */}
        <div id="mobile-nav-menu" className="mobile-top-nav-menu">
        <ul className="mobile-top-nav-list">
          <li>
            {" "}
            <Link to="/"> 00 Home </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/destination"> 01 Destination </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/crew"> 02 Crew </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/technology"> 03 Technology </Link>{" "}
          </li>
        </ul>
      </div>
      {/* END OF RESPONSIVE NAVBAR (MOBILE) */}

       
      </div>
       <div id="close">
        <button className="mobile-navbar-hamburger" onClick={clickOpen}>
          <img src={Hamburger} alt="" />
        </button> 
        </div>
      <div id="nav-menu" className="top-nav-menu">
        <ul className="top-nav-list">
          <li>
            {" "}
            <Link to="/"> <span  className="top-navbar-number" aria-hidden="true">00</span> Home </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/destination"> <span className="top-navbar-number">01</span> Destination </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/crew"><span className="top-navbar-number">02</span>Crew </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/technology"><span className="top-navbar-number">03</span> Technology </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
