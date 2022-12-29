import { useLikesContext } from "../context/LikesContext";
import { useSinglePostContext } from "../context/SinglePostContext";
import * as HiIcons from "react-icons/hi";
import * as FiIcons from "react-icons/fi";

import styled from "styled-components";
import { useSavedPostContext } from "../context/SavedPostContext";

const ActionsBar = ({ postInfo }) => {
  const { handleLikedPost, isLikedPost } = useLikesContext();
  const { isSinglePostOpen, handleMakeComment } = useSinglePostContext();
  const { savePost, isPostSaved } = useSavedPostContext();

  return (
    <ActionsBarWrapper isSinglePostOpen={isSinglePostOpen}>
      <div className="interaction-bar">
        <button onClick={handleLikedPost}>
          {isLikedPost ? (
            <HiIcons.HiHeart className="interaction-icons heart-btn-color" />
          ) : (
            <HiIcons.HiOutlineHeart className="interaction-icons" />
          )}
        </button>
        <button onClick={() => handleMakeComment(postInfo)}>
          <FiIcons.FiMessageCircle className="interaction-icons" />
        </button>
      </div>
      {isPostSaved ? (
        <button onClick={() => savePost(postInfo)}>
          <FiIcons.FiBookmark className="interaction-icons icon-position active" />
        </button>
      ) : (
        <button onClick={() => savePost(postInfo)}>
          <FiIcons.FiBookmark className="interaction-icons icon-position" />
        </button>
      )}
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
  padding: ${(props) => props.isSinglePostOpen && "0 15px 0 15px"};

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

  .icon-position.active {
    fill: var(--icons);
  }

  .heart-btn-color {
    color: var(--heart);
  }
`;
