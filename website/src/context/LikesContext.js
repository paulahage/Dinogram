import React, { useState, useContext } from "react";

const LikesContext = React.createContext();

export const LikesProvider = ({ children }) => {
  const likedPostsOnStorage = JSON.parse(localStorage.getItem("likedPosts")) || [];

  const [isLikedComment, setIsLikedComment] = useState(false);

  const likePost = (post) => {
    likedPostsOnStorage.push(post);
    localStorage.setItem("likedPosts", JSON.stringify(likedPostsOnStorage));
  };

  const removeLikeOnPost = (post) => {
    const postToRemoveIndex = likedPostsOnStorage.findIndex(
      (likedPost) => likedPost.id === post.id
    );

    if (postToRemoveIndex > -1) {
      likedPostsOnStorage.splice(postToRemoveIndex, 1);
      localStorage.setItem("likedPosts", JSON.stringify(likedPostsOnStorage));
    }
  };

  const handleLikeComment = () => {
    setIsLikedComment(!isLikedComment);
  };

  return (
    <LikesContext.Provider
      value={{
        isLikedComment,
        handleLikeComment,
        likePost,
        removeLikeOnPost,
        likedPostsOnStorage,
      }}
    >
      {children}
    </LikesContext.Provider>
  );
};

export const useLikesContext = () => {
  return useContext(LikesContext);
};
