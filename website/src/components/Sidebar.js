import React from "react";
import { NavLink } from "react-router-dom";
import { useSidebarContext } from "../context/SidebarContext";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";

import SidebarNotifications from "./SidebarNotifications";
import SavedPostsBtn from "./SavedPostsBtn";

const Sidebar = () => {
  const {
    closeSideMenus,
    showNotifications,
    showSavedPostsBtn,
    openSavedPostsBtn,
    openSidebarNotifications,
  } = useSidebarContext();

  return (
    <>
      <SidebarWrapper>
        {/* --------LOGO-------- */}
        <NavLink to="/" onClick={closeSideMenus}>
          <p className="logo">Dinogram</p>
        </NavLink>
        {/* --------HOME BTN-------- */}
        <div className="icon-container">
          <div className="home-btn background-icon">
            <NavLink to="/" onClick={closeSideMenus}>
              <AiIcons.AiFillHome className="nav-icon icon-position" />
              <span className="page-title">Home</span>
            </NavLink>
          </div>
        </div>
        <div className="icon-btns">
          {/* --------SEARCH BTN-------- */}
          <div className="background-icon">
            <NavLink to="/search" onClick={closeSideMenus}>
              <FiIcons.FiSearch className="nav-icon icon-position" />
              <span className="page-title">Search</span>
            </NavLink>
          </div>
          {/* --------DM BTN-------- */}
          <div className="background-icon">
            <NavLink to="/direct/inbox" onClick={closeSideMenus}>
              <FiIcons.FiSend className="nav-icon send-icon" />
              <span className="page-title">Messages</span>
            </NavLink>
          </div>
          {/* --------NOTIFICATIONS BTN-------- */}
          <div className="background-icon">
            <button onClick={showNotifications}>
              <FiIcons.FiHeart className="nav-icon icon-position" />
              <span className="page-title">Notifications</span>
            </button>
          </div>
          {/* --------PROFILE BTN-------- */}
          <div className="background-icon">
            <NavLink to="/:userId" onClick={closeSideMenus}>
              <div className="my-profile-avatar" />
              <span className="page-title title-avatar-position">Profile</span>
            </NavLink>
          </div>
        </div>
        {/* --------SETTINGS BTN-------- */}
        <div className="icon-container">
          <div className="background-icon settings-btn">
            <button onClick={showSavedPostsBtn}>
              <FiIcons.FiSettings
                className="nav-icon icon-position"
                onClick={closeSideMenus}
              />
              <span className="page-title">Settings</span>
            </button>
          </div>
          {openSavedPostsBtn ? <SavedPostsBtn /> : ""}
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

export default Sidebar;

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

  .icon-btns {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .home-btn {
    margin-top: 20px;
  }

  .icon-position {
    position: relative;
    top: 3px;
  }

  .send-icon {
    position: relative;
    top: 6px;
    right: 1px;
  }

  .settings-btn {
    margin-top: 160px;
    margin-bottom: 20px;
  }

  .my-profile-avatar {
    width: 29px;
    height: 29px;
    display: inline-block;
    position: relative;
    top: 3px;
    border-radius: 50%;
    border: 2px solid var(--grey);
    background-image: url("../images/dino_avatar.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
  }

  .my-profile-avatar:hover {
    transform: scale(1.1);
  }

  .title-avatar-position {
    margin-left: 14px;
    position: relative;
    top: -6px;
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

    .page-title-avatar {
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
      background-size: 30px;
      position: relative;
      top: 3px;
    }
  }
`;
