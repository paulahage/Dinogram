import React from "react";
import { useSidebarContext } from "../context/SidebarContext";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import * as FiIcons from "react-icons/fi";

const SavedPostsBtn = () => {
  const { closeSideMenus } = useSidebarContext();

  return (
    <SavedPostsBtnWrapper >
      <NavLink
        to="/settings/saved"
        onClick={closeSideMenus}
        className="saved-posts-container"
      >
        <p className="saved-posts-btn">Saved</p>
        <FiIcons.FiBookmark className="saved-icon" />
      </NavLink>
    </SavedPostsBtnWrapper>
  );
};

export default SavedPostsBtn;

const SavedPostsBtnWrapper = styled.div`
  width: 150px;
  height: 45px;
  border-radius: 10px;
  box-shadow: 0px 2px 18px 3px rgba(179, 179, 179, 1);
  position: absolute;
  bottom: 50px;
  text-align: center;
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  .saved-posts-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: flex-start;
  }

  .saved-posts-btn {
    font-weight: var(--regular);
    font-size: var(--fs_regular_plus);
    color: var(--icons);
  }

  .saved-icon {
    color: var(--icons);
    font-size: 18px;
    position: relative;
    top: 3px;
  }

  @media screen and (max-width: 1220px) {
    left: 10px;
  }
`;

