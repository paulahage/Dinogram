import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import SidebarNotifications from "./SidebarNotifications";
import ProfileAvatar from "./Profile_Avatar";
import Logout from "./Logout";

const SidebarCompact = () => {
  const [openSidebarNotifications, setOpenSidebarNotifications] = useState(false);
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
      <CompactSidebarWrapper className="sidebar">
        <div className="home-btn background-icon">
          <NavLink to="/">
            <AiIcons.AiFillHome className="nav-icon" onClick={closeSideMenus} />
          </NavLink>
        </div>
        <div className="icon-btns">
          <div className="background-icon">
            <Link to="/search" onClick={closeSideMenus}>
              <FiIcons.FiSearch className="nav-icon" />
            </Link>
          </div>
          <div className="background-icon">
            <Link to="/direct_message" className="mgn" onClick={closeSideMenus}>
              <FiIcons.FiSend className="nav-icon" />
            </Link>
          </div>
          <div className="background-icon">
            <button onClick={showNotifications} className="mgn">
              <FiIcons.FiHeart className="nav-icon" />
            </button>
          </div>
          <div className="background-icon">
            <Link
              to="/profile"
              className="profile-avatar mgn"
              onClick={closeSideMenus}
            >
              <ProfileAvatar />
            </Link>
          </div>
        </div>
        <div className="background-icon settings-btn">
          <button onClick={showLogoutBtn}>
            <FiIcons.FiSettings className="nav-icon" onClick={closeSideMenus} />
          </button>
          {openLogoutBtn ? <Logout /> : ""}
        </div>
      </CompactSidebarWrapper>
      {openSidebarNotifications ? (
        <SidebarNotifications open={openSidebarNotifications} />
      ) : (
        ""
      )}
    </>
  );
};

export default SidebarCompact;

const CompactSidebarWrapper = styled.nav`
  width: 80px;

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
