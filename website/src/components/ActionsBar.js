import React, { useEffect, useState } from "react";
import { useLikesContext } from "../context/LikesContext";
import { useSinglePostContext } from "../context/SinglePostContext";
import * as HiIcons from "react-icons/hi";
import * as FiIcons from "react-icons/fi";

import styled from "styled-components";
import { useSavedPostContext } from "../context/SavedPostContext";

const ActionsBar = ({ postInfo }) => {
  const { isSinglePostOpen, handleMakeComment } = useSinglePostContext();
  const { savedPostsOnStorage, savePost, removePost } = useSavedPostContext();
  const { likedPostsOnStorage, likePost, removeLikeOnPost } = useLikesContext();

  const [isPostSaved, setIsPostSaved] = useState(false);
  const [isLikedPost, setIsLikedPost] = useState(false);

  const getPostOnStorage = () => {
    return savedPostsOnStorage.find((savedPost) => savedPost.post.id === postInfo.post.id);
  };

  const getLikedPostOnStorage = () => {
    return likedPostsOnStorage.find(
      (likedPost) => likedPost.post.id === postInfo.post.id
    );
  };

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

  const handleLikePost = () => {
    const hasLikedPostOnStorage = getLikedPostOnStorage();

    if (!hasLikedPostOnStorage) {
      likePost(postInfo);
      setIsLikedPost(true);
      return;
    }
    removeLikeOnPost(postInfo);
    setIsLikedPost(false);
  };

  useEffect(() => {
    if (savedPostsOnStorage.length) {
      setIsPostSaved(getPostOnStorage());
    }

    if (likedPostsOnStorage.length) {
      setIsLikedPost(getLikedPostOnStorage());
    }
    //eslint-disable-next-line
  }, []);

  return (
    <ActionsBarWrapper isSinglePostOpen={isSinglePostOpen}>
      <div className="interaction-bar">
        <button onClick={handleLikePost}>
          <HiIcons.HiOutlineHeart
            className={
              isLikedPost
                ? "interaction-icons heart-btn-color"
                : "interaction-icons"
            }
          />
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
    fill: var(--heart);
    color: var(--heart);
  }
`;
