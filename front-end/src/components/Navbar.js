import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import Color from "../constants/Color";

const NavLink = styled(Link)`
  color: ${(props) => (props.decoration ? "white" : "red")};
  align-items: center;
  text-decoration: ${(props) => props.decoration};
  text-underline-position: under;
  text-underline-offset: 5px;

  padding-bottom: 10px;
  height: 100%;
  &.active {
    color: #15cdfc;
    font-weight: bold;
  }
`;

const NavBar = () => {
  const [home, setHome] = useState(true);
  const [cons, setConst] = useState(false);
  const [interior, setInterior] = useState(false);
  const [renovation, setRenovation] = useState(false);
  const [about, setAbout] = useState(false);
  // const [gallery, setGallery] = useState(false);

  const MouseOver = (event) => {
    // event.target.style.borderBottom = "4px solid rgba(256, 256, 256, 0.5)";
    event.target.style.color = "#15cdfc";
  };
  const MouseOut = (event) => {
    event.target.style.borderBottom = "";
    event.target.style.color = "white";
  };
  const Home = () => {
    setHome(true);
    setConst(false);
    setInterior(false);
    setRenovation(false);
    setAbout(false);
  };
  const Const = () => {
    setConst(true);
    setHome(false);
    setInterior(false);
    setRenovation(false);
    setAbout(false);
  };
  const Interior = () => {
    setConst(false);
    setHome(false);
    setInterior(true);
    setRenovation(false);
    setAbout(false);
  };
  const Renovation = () => {
    setConst(false);
    setHome(false);
    setInterior(false);
    setRenovation(true);
    setAbout(false);
  };
  const About = () => {
    setConst(false);
    setHome(false);
    setInterior(false);
    setRenovation(false);
    setAbout(true);
  };

  return (
    <nav
      className="navbar navbar-expand-lg  sticky-top navbar-dark"
      style={{ width: "100%", background: Color.primary }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <NavLink
          to="/"
          className="navbar-brand"
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
          onClick={Home}
          decoration={home ? "underline" : "none"}
        >
          <h1>Home</h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/construction"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                onClick={Const}
                decoration={cons ? "underline" : "none"}
              >
                <h5 style={{ marginRight: 20, marginLeft: 20 }}>
                  Construction
                </h5>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/interior-design"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                onClick={Interior}
                decoration={interior ? "underline" : "none"}
              >
                <h5 style={{ marginRight: 20, marginLeft: 20 }}>
                  Interior Design
                </h5>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/renovation"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                onClick={Renovation}
                decoration={renovation ? "underline" : "none"}
              >
                <h5 style={{ marginRight: 20, marginLeft: 20 }}>Renovation</h5>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                onClick={About}
                decoration={about ? "underline" : "none"}
              >
                <h5 style={{ marginRight: 20, marginLeft: 20 }}>About us</h5>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
