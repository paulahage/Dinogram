import React from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../utils";
import { useUserLoggedContext } from "../context/UserLoggedContext";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";

const BottomNavbarMobile = () => {
  const { loggedUser } = useUserLoggedContext();

  return (
    <BottomNavbarMobileWrapper userAvatar={BASE_URL + loggedUser.avatar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "icon-active" : "")}
        end
      >
        <AiIcons.AiFillHome className="nav-icon-mobile" />
      </NavLink>
      <NavLink
        to={`${loggedUser.id}`}
        className={({ isActive }) => (isActive ? "icon-active" : "")}
        end
      >
        <div className="my-profile-avatar-mobile" />
      </NavLink>
      <NavLink
        to="/settings/saved"
        className={({ isActive }) => (isActive ? "icon-active" : "")}
        end
      >
        <FiIcons.FiBookmark className="nav-icon-mobile" />
      </NavLink>
    </BottomNavbarMobileWrapper>
  );
};

export default BottomNavbarMobile;

const BottomNavbarMobileWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background-color: var(--white);
  border-top: 1px solid var(--grey_transparent);

  .nav-icon-mobile {
    color: var(--icons);
    fill: var(--icons);
    font-size: 27px !important;
  }

  .icon-active {
    border: 1px solid var(--grey_transparent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }

  .my-profile-avatar-mobile {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid var(--grey);
    background-image: url(${(props) => props.userAvatar});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
