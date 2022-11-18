import React from "react";
import * as HiIcons from "react-icons/hi";
import * as FiIcons from "react-icons/fi";
import styled from "styled-components";
import { useLikesContext } from "../context/LikesContext";

const ActionsBar = () => {
  const { handleLikedPost, isLikedPost } = useLikesContext();

  return (
    <ActionsBarWrapper>
      <div className="interaction-bar">
        <button onClick={handleLikedPost}>
          {isLikedPost ? (
            <HiIcons.HiHeart className="interaction-icons heart-btn-color" />
          ) : (
            <HiIcons.HiOutlineHeart className="interaction-icons" />
          )}
        </button>
        <FiIcons.FiMessageCircle className="interaction-icons" />
      </div>
      <FiIcons.FiBookmark className="interaction-icons icon-position" />
    </ActionsBarWrapper>
  );
};

export default ActionsBar;

const ActionsBarWrapper = styled.div`
  width: 444px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .interaction-bar {
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon-position {
    position: relative;
    top: 2px;
  }

  .heart-btn-color {
    color: var(--heart);
  }
`;
