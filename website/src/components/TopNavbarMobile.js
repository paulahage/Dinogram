import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import SearchInput from "./SearchInput";

const TopNavbarMobile = () => {
  return (
    <TopNavbarMobileWrapper>
      <NavLink to="/">
        <p className="logo-mobile">Dinogram</p>
      </NavLink>
      <SearchInput />
    </TopNavbarMobileWrapper>
  );
};

export default TopNavbarMobile;

const TopNavbarMobileWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background-color: var(--white);
  border-bottom: 1px solid var(--grey_transparent);

  .logo-mobile {
    font-family: "Leckerli One", cursive;
    font-size: 28px;
    color: var(--icons);
  }

  @media screen and (max-width: 550px) {
    border-bottom: none;
    height: 90px;
    align-items: flex-start;
    padding-top: 15px;
  }
`;


