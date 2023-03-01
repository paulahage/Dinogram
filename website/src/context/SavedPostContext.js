import React, { useContext } from "react";

const SavedPostContext = React.createContext();

export const SavedPostProvider = ({ children }) => {
  const savedPostsOnStorage = JSON.parse(localStorage.getItem("savedPosts")) || [];

  const savePost = (post) => {
    savedPostsOnStorage.push(post);
    localStorage.setItem("savedPosts", JSON.stringify(savedPostsOnStorage));
  };

  const removePost = (post) => {
    const postToRemoveIndex = savedPostsOnStorage.findIndex((savedPost) => savedPost.id === post.id);

    if (postToRemoveIndex > -1) {
      savedPostsOnStorage.splice(postToRemoveIndex, 1);
      localStorage.setItem("savedPosts", JSON.stringify(savedPostsOnStorage));
    }
  };

  return (
    <SavedPostContext.Provider value={{ savedPostsOnStorage, savePost, removePost }}>
      {children}
    </SavedPostContext.Provider>
  );
};

export const useSavedPostContext = () => {
  return useContext(SavedPostContext);
};
