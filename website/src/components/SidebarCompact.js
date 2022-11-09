import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";

import SidebarNotifications from "./SidebarNotifications";
import ProfileAvatar from "./ProfileAvatar";
import Logout from "./Logout";

const SidebarCompact = () => {
  const [openSidebarNotifications, setOpenSidebarNotifications] =
    useState(false);
  const [openLogoutBtn, setOpenLogoutBtn] = useState(false);

  const showNotifications = () => {
    setOpenSidebarNotifications(!openSidebarNotifications);
  };

  const closeSideMenus = () => {
    setOpenSidebarNotifications(false);
    setOpenLogoutBtn(false);
  };

  const showLogoutBtn = () => {
    setOpenLogoutBtn(!openLogoutBtn);
  };

  return (
    <>
      <SidebarWrapper>
        <div className="home-btn background-icon">
          <NavLink to="/">
            <AiIcons.AiFillHome className="nav-icon" onClick={closeSideMenus} />
          </NavLink>
        </div>
        <div className="icon-btns">
          <div className="background-icon">
            <NavLink to="/search" onClick={closeSideMenus}>
              <FiIcons.FiSearch className="nav-icon" />
            </NavLink>
          </div>
          <div className="background-icon">
            <NavLink to="/direct_message" onClick={closeSideMenus}>
              <FiIcons.FiSend className="nav-icon" />
            </NavLink>
          </div>
          <div className="background-icon">
            <button onClick={showNotifications}>
              <FiIcons.FiHeart className="nav-icon" />
            </button>
          </div>
          <div className="background-icon profile-avatar">
            <NavLink to="/profile" onClick={closeSideMenus}>
              <ProfileAvatar />
            </NavLink>
          </div>
        </div>
        <div className="background-icon settings-btn">
          <button onClick={showLogoutBtn}>
            <FiIcons.FiSettings className="nav-icon" onClick={closeSideMenus} />
          </button>
          {openLogoutBtn ? <Logout /> : ""}
        </div>
      </SidebarWrapper>
      {openSidebarNotifications ? (
        <SidebarNotifications open={openSidebarNotifications} />
      ) : (
        ""
      )}
    </>
  );
};

export default SidebarCompact;

const SidebarWrapper = styled.nav`
  width: 80px;
  height: 100vh;
  background: var(--white);
  border-right: 1px solid var(--grey);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  .home-btn {
    margin-top: 20px;
  }

  .icon-btns {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .profile-avatar:hover {
    transform: scale(1.1);
  }

  .settings-btn {
    margin-top: 160px;
    margin-bottom: 20px;
  }
`;
