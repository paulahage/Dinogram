import React, { useEffect, useState } from "react";
import { useLikesContext } from "../context/LikesContext";
import { useSinglePostContext } from "../context/SinglePostContext";
import { useSavedPostContext } from "../context/SavedPostContext";
import { postLikeOnSinglePost } from "../services/ApiService";
import { deleteLikeOnSinglePost } from "../services/ApiService";
import * as HiIcons from "react-icons/hi";
import * as FiIcons from "react-icons/fi";
import styled from "styled-components";

const ActionsBar = ({ postInfos }) => {
  const { isSinglePostOpen, handleMakeComment } = useSinglePostContext();
  const { savedPostsOnStorage, savePost, removePost } = useSavedPostContext();
  const { likedPostsOnStorage, likePost, removeLikeOnPost } = useLikesContext();

  const [isPostSaved, setIsPostSaved] = useState(false);
  const [isLikedPost, setIsLikedPost] = useState(false);

  const getPostOnStorage = () => {
    return savedPostsOnStorage.find((savedPost) => savedPost.id === postInfos.id);
  };

  const getLikedPostOnStorage = () => {
    return likedPostsOnStorage.find((likedPost) => likedPost.id === postInfos.id);
  };

  const handleSavePost = () => {
    const hasPostOnStorage = getPostOnStorage();

    if (!hasPostOnStorage) {
      savePost(postInfos);
      setIsPostSaved(true);
      return;
    }
    removePost(postInfos);
    setIsPostSaved(false);
  };

  const handleLikePost = async () => {
    const hasLikedPostOnStorage = getLikedPostOnStorage();

    if (!hasLikedPostOnStorage) {
      likePost(postInfos);
      setIsLikedPost(true);

      const likeSinglePost = await postLikeOnSinglePost(postInfos.id);
      console.log("actions bar post is liked", likeSinglePost);
      return;
    }
    removeLikeOnPost(postInfos);
    setIsLikedPost(false);
    const deleteLikePost = await deleteLikeOnSinglePost(postInfos.id);
    console.log("actions bar post is deleted", deleteLikePost);
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
        <button onClick={() => handleMakeComment(postInfos)}>
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
  border-top: ${(props) => props.isSinglePostOpen && "1px solid var(--grey)"};

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
