import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";

import SidebarNotifications from "./SidebarNotifications";
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
        {/* --------LOGO-------- */}
        <p className="logo">Dinogram</p>
        {/* --------HOME BTN-------- */}
        <div className="icon-container">
          <div className="home-btn background-icon">
            <NavLink to="/">
              <AiIcons.AiFillHome
                className="nav-icon home-icon"
                onClick={closeSideMenus}
              />
              <span className="page-title">Home</span>
            </NavLink>
          </div>
        </div>
        {/* --------PAGES BTN'S-------- */}
        <div className="icon-btns">
          <div className="background-icon">
            <NavLink to="/search" onClick={closeSideMenus}>
              <FiIcons.FiSearch className="nav-icon search-icon" />
              <span className="page-title">Search</span>
            </NavLink>
          </div>
          <div className="background-icon">
            <NavLink to="/direct_message" onClick={closeSideMenus}>
              <FiIcons.FiSend className="nav-icon send-icon" />
              <span className="page-title">Messages</span>
            </NavLink>
          </div>
          <div className="background-icon">
            <button onClick={showNotifications}>
              <FiIcons.FiHeart className="nav-icon heart-icon" />
              <span className="page-title">Notifications</span>
            </button>
          </div>
          <div className="background-icon">
            <NavLink
              to="/profile"
              onClick={closeSideMenus}
              // style={{ display: "flex" }}
            >
              <div className="my-profile-avatar profile-avatar" />
              <span className="page-title-avatar">Profile</span>
            </NavLink>
          </div>
        </div>
        {/* --------SETTINGS BTN-------- */}
        <div className="icon-container">
          <div className="background-icon settings-btn">
            <button onClick={showLogoutBtn}>
              <FiIcons.FiSettings
                className="nav-icon settings-icon"
                onClick={closeSideMenus}
              />
              <span className="page-title">Settings</span>
            </button>
          </div>
          {openLogoutBtn ? <Logout /> : ""}
        </div>
      </SidebarWrapper>
      {/* --------SIDE NOTIFICATIONS-------- */}
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
  width: 245px;
  height: 100vh;
  padding-left: 20px;
  background: var(--white);
  border-right: 1px solid var(--grey);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 1;

  .icon-container {
    width: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .home-btn {
    margin-top: 20px;
  }

  .icon-btns {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  profile-avatar:hover {
    transform: scale(1.1);
  }

  .home-icon {
    position: relative;
    top: 3px;
  }

  .heart-icon {
    position: relative;
    top: 3px;
  }

  .search-icon {
    position: relative;
    top: 3px;
  }

  .send-icon {
    position: relative;
    top: 6px;
    right: 1px;
  }

  .settings-icon {
    position: relative;
    top: 3px;
  }

  .settings-btn {
    margin-top: 160px;
    margin-bottom: 20px;
  }

  .my-profile-avatar {
    width: 29px;
    height: 29px;
    border-radius: 50%;
    border: 2px solid var(--grey);
    background-image: url("../images/dino_avatar.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
  }

  @media screen and (max-width: 1220px) {
    width: 80px;
    align-items: center;
    padding-left: 0px;

    .logo {
      display: none;
    }

    .page-title {
      display: none;
    }

    .icon-container {
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .my-profile-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid var(--grey);
      background-image: url("../images/dino_avatar.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 30px;
    }

    .page-title-avatar {
      display: none;
    }
  }
`;

// .page-title-avatar {
//     font-family: "Poppins", sans-serif;
//     font-size: 16px;
//     font-weight: var(--bold);
//     color: var(--icons);
//     margin-left: 14px;
//     position: relative;
//     top: 2px;
//   }