import React, { useEffect, useState } from "react";
import { useLikesContext } from "../context/LikesContext";
import { useSinglePostContext } from "../context/SinglePostContext";
import * as HiIcons from "react-icons/hi";
import * as FiIcons from "react-icons/fi";

import styled from "styled-components";
import { useSavedPostContext } from "../context/SavedPostContext";

const ActionsBar = ({ postInfo }) => {
  const { handleLikedPost, isLikedPost } = useLikesContext();
  const { isSinglePostOpen, handleMakeComment } = useSinglePostContext();
  const { savedPostsOnStorage, savePost, removePost } = useSavedPostContext();

  const [isPostSaved, setIsPostSaved] = useState(false);

  const getPostOnStorage = () => {
    return savedPostsOnStorage.find((savedPost) => savedPost.post.id === postInfo.post.id);
  }

  const handleSavePost = () => {
    const hasPostOnStorage = getPostOnStorage();

    if (!hasPostOnStorage) {
      savePost(postInfo);
      setIsPostSaved(true);
      return;
    }
    removePost(postInfo);
    setIsPostSaved(false);
  };

  useEffect(() => {
    if (savedPostsOnStorage.length) {
      setIsPostSaved(getPostOnStorage());
    }
    //eslint-disable-next-line
  }, []);

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
      <button onClick={handleSavePost}>
        <FiIcons.FiBookmark
          className={
            isPostSaved
              ? "interaction-icons icon-position active"
              : "interaction-icons icon-position"
          }
        />
      </button>
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
  padding: ${(props) => props.isSinglePostOpen && "20px 15px 20px 15px"};
  border-top: ${(props)=> props.isSinglePostOpen && "1px solid var(--grey)"};

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
