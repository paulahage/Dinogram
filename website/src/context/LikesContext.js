import React, { useState, useContext } from "react";

const LikesContext = React.createContext();

export const LikesProvider = ({ children }) => {
  const [isLikedComment, setIsLikedComment] = useState(false);
  const [isLikedPost, setIsLikedPost] = useState(false);

  const handleLikeComment = () => {
    setIsLikedComment(!isLikedComment);
  };

  const handleLikedPost = () => {
    setIsLikedPost(!isLikedPost);
  };

  return (
    <LikesContext.Provider
      value={{ isLikedComment, handleLikeComment, isLikedPost, handleLikedPost }}
    >
      {children}
    </LikesContext.Provider>
  );
};

export const useLikesContext = () => {
  return useContext(LikesContext);
};
