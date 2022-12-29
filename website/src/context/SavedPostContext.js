import React, { useContext } from "react";
import { useState } from "react";

const SavedPostContext = React.createContext();

export const SavedPostProvider = ({ children }) => {
  const [isPostSaved, setIsPostSaved] = useState(false);

  const savedPostsOnStorage = JSON.parse(localStorage.getItem("savedPosts")) || [];

  const savePost = (post) => {
    const hasSamePostOnStorage = savedPostsOnStorage.find((savedPost) => savedPost.post.id === post.post.id);

    if (!hasSamePostOnStorage) {
      savedPostsOnStorage.push(post);
      localStorage.setItem("savedPosts", JSON.stringify(savedPostsOnStorage));
      setIsPostSaved(true);
    }
  };

  return (
    <SavedPostContext.Provider value={{ savePost, isPostSaved }}>
      {children}
    </SavedPostContext.Provider>
  );
};

export const useSavedPostContext = () => {
  return useContext(SavedPostContext);
};
