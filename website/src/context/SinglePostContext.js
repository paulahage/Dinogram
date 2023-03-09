import React, { useContext, useState } from "react";
import { useFeedAndPostsContext } from "../context/FeedAndPostsContext";

const SinglePostContext = React.createContext();

export const SinglePostProvider = ({ children }) => {
  const [isSinglePostOpen, setIsSinglePostOpen] = useState(false);
  const [clickedPost, setClickedPost] = useState({});

  const { focusRef } = useFeedAndPostsContext();

  const toggleSinglePost = (postInfos) => {
    setClickedPost(postInfos);
    setIsSinglePostOpen(!isSinglePostOpen);
  };

  const handleClose = (e) => {
    if (e.target.id) {
      setIsSinglePostOpen(!isSinglePostOpen);
    }
  };

  const handleMakeComment = (postInfo) => {
    if (isSinglePostOpen) {
      focusRef.current.focus();
    } else {
      setClickedPost(postInfo);
      setIsSinglePostOpen(!isSinglePostOpen);
    }
  };

  return (
    <SinglePostContext.Provider
      value={{
        toggleSinglePost,
        isSinglePostOpen,
        clickedPost,
        handleClose,
        handleMakeComment,
      }}
    >
      {children}
    </SinglePostContext.Provider>
  );
};

export const useSinglePostContext = () => {
  return useContext(SinglePostContext);
};
