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
  };

  const showLogoutBtn = () => {
    setOpenLogoutBtn(!openLogoutBtn);
  };

  return (
    <>
      <SidebarWrapper>
        <div className="home-btn">
          <NavLink to="/">
            <AiIcons.AiFillHome className="nav-icon" onClick={closeSideMenus} />
          </NavLink>
        </div>
        <div className="icon-btns">
          <Link to="/search" onClick={closeSideMenus}>
            <AiIcons.AiOutlineSearch className="nav-icon search" />
          </Link>
          <Link to="/direct_message" className="mgn" onClick={closeSideMenus}>
            <FiIcons.FiSend className="nav-icon" />
          </Link>
          <button onClick={showNotifications} className="mgn">
            <FiIcons.FiHeart className="nav-icon" />
          </button>
          <Link to="/profile" className="mgn" onClick={closeSideMenus}>
            <ProfileAvatar />
          </Link>
        </div>
        <button className="settings-btn" onClick={showLogoutBtn}>
          <FiIcons.FiSettings className="nav-icon" onClick={closeSideMenus} />
        </button>
        {openLogoutBtn ? <Logout/> : ""}
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
    margin-top: 40px;
  }

  .icon-btns {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .mgn {
    margin-top: 40px;
  }

  .search {
    font-size: 30px;
  }

  .settings-btn {
    margin: 180px 0 40px 0;
  }
`;
