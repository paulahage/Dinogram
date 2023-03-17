import React, { useContext } from "react";

const LikesContext = React.createContext();

export const LikesProvider = ({ children }) => {
  const likedPostsOnStorage = JSON.parse(localStorage.getItem("likedPosts")) || [];
  const likedCommentOnStorage = JSON.parse(localStorage.getItem("likedComment")) || [];

  const likeComment = (comment) => {
    likedCommentOnStorage.push(comment);
    localStorage.setItem("likedComment", JSON.stringify(likedCommentOnStorage));
  };

  const removeLikeOnComment = (comment) => {
    const commentToRemoveIndex = likedCommentOnStorage.findIndex(
      (likedComment) => likedComment.id === comment.id
    );

    if (commentToRemoveIndex > -1) {
      likedCommentOnStorage.splice(commentToRemoveIndex, 1);
      localStorage.setItem("likedComment",JSON.stringify(likedCommentOnStorage));
    }
  };

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

  const getLikedCommentOnStorage = (comment) => {
    return likedCommentOnStorage.find(
      (userComment) => userComment.id === comment.id
    );
  };

  return (
    <LikesContext.Provider
      value={{
        likePost,
        removeLikeOnPost,
        likedPostsOnStorage,
        likeComment,
        likedCommentOnStorage,
        removeLikeOnComment,
        getLikedCommentOnStorage,
      }}
    >
      {children}
    </LikesContext.Provider>
  );
};

export const useLikesContext = () => {
  return useContext(LikesContext);
};
