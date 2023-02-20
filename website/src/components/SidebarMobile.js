import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import SearchInput from "./SearchInput";

const SidebarMobile = () => {
  return (
    <SidebarMobileWrapper>
      <nav className="navbar-top">
        <NavLink to="/">
          <p className="logo-mobile">Dinogram</p>
        </NavLink>
        <SearchInput/>
      </nav>
      <nav className="navbar-bottom"></nav>
    </SidebarMobileWrapper>
  );
};

export default SidebarMobile;

const SidebarMobileWrapper = styled.div`
  display: none;

  @media screen and (max-width: 765px) {
    display: block;

    .navbar-top {
      width: 100%;
      height: 60px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      padding: 0 15px;
      background-color: var(--white);
      border-bottom: 1px solid var(--grey);
    }

    .logo-mobile {
      font-family: "Leckerli One", cursive;
      font-size: 28px;
      color: var(--icons);
    }
  }

  @media screen and (max-width: 550px) {
    .navbar-top {
      border-bottom: none;
    }
  }
`;
