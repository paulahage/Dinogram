import React, { useContext, useState, useEffect } from "react";
import { useFeedAndPostsContext } from "../context/FeedAndPostsContext";
import { fetchAllComments } from "../services/ApiService";

const SinglePostContext = React.createContext();

export const SinglePostProvider = ({ children }) => {
  const [isSinglePostOpen, setIsSinglePostOpen] = useState(false);
  const [clickedPost, setClickedPost] = useState({});
  const [comments, setComments] = useState([]);

  const { focusRef } = useFeedAndPostsContext();

  const getAllComments = async (postId) => {
    const singlePost = await fetchAllComments(postId);
    setComments(singlePost.post.comments);
  };

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
  }

  useEffect(() => {
    if (clickedPost.post) {
      getAllComments(clickedPost.post.id);
    }
  }, [clickedPost]);

  return (
    <SinglePostContext.Provider
      value={{
        toggleSinglePost,
        isSinglePostOpen,
        clickedPost,
        handleClose,
        comments,
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
