import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { useSidebarContext } from "../context/SidebarContext";

const Logout = () => {
  const { closeSideMenus } = useSidebarContext();

  return (
    <LogoutWrapper>
      <NavLink to="/" onClick={closeSideMenus}>
        <p className="logout-btn">Logout</p>
      </NavLink>
    </LogoutWrapper>
  );
};

export default Logout;

const LogoutWrapper = styled.div`
  width: 154px;
  height: 45px;
  border-radius: 10px;
  box-shadow: 0px 2px 18px 3px rgba(179, 179, 179, 1);
  position: absolute;
  top: 593px;
  left: 37px;
  text-align: center;
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  .logout-btn {
    font-weight: var(--regular);
    font-size: 14.5px;
    color: var(--icons);
  }

  @media screen and (max-width: 1220px) {
    width: 60px;
    height: 40px;
    top: 605px;
    left: 10px;
  }
`;

