import React from "react";
import { useLikesContext } from "../context/LikesContext";
import { useSinglePostContext } from "../context/SinglePostContext";
import * as HiIcons from "react-icons/hi";
import * as FiIcons from "react-icons/fi";
import styled from "styled-components";

const ActionsBar = ({ postInfo }) => {
  const { handleLikedPost, isLikedPost } = useLikesContext();
  const { toggleSinglePost } = useSinglePostContext();

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
        <button onClick={()=> toggleSinglePost(postInfo)}>
          <FiIcons.FiMessageCircle className="interaction-icons" />
        </button>
      </div>
      <FiIcons.FiBookmark className="interaction-icons icon-position" />
    </ActionsBarWrapper>
  );
};

export default ActionsBar;

const ActionsBarWrapper = styled.div`
  width: 100%;
  height: 30px;
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
