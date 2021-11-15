import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Home</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About us
          </NavLink>
          <NavLink to="/construction" activeStyle>
            Construction
          </NavLink>
          <NavLink to="/interior-design" activeStyle>
            Interior Design
          </NavLink>
          <NavLink to="/renovation" activeStyle>
            Renovation
          </NavLink>

          {/* 2end Nav */}
          {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
