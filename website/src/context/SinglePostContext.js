import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { fetchAllComments } from "../services/ApiService";

const SinglePostContext = React.createContext();

export const SinglePostProvider = ({ children }) => {
  const [isSinglePostOpen, setIsSinglePostOpen] = useState(false);
  const [clickedPost, setClickedPost] = useState({});
  const [comments, setComments] = useState([]);

  const getAllComments = async (postId) => {
    const singlePost = await fetchAllComments(postId);
    setComments(singlePost.post.comments);
  };

  const toggleSinglePost = (postInfo) => {
    setClickedPost(postInfo);
    setIsSinglePostOpen(!isSinglePostOpen);
  };

  const handleClose = (e) => {
    if (e.target.id) {
      setIsSinglePostOpen(!isSinglePostOpen);
    }
  };

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
      }}
    >
      {children}
    </SinglePostContext.Provider>
  );
};

export const useSinglePostContext = () => {
  return useContext(SinglePostContext);
};
