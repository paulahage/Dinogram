import React, { useContext, useState } from "react";
import { postComment } from "../services/ApiService";
import { URL_POST } from "../utils";


const CommentContext = React.createContext();

export const CommentProvider = ({ children }) => {
  const [myComment, setMyComment] = useState("");

  const handleComment = (e) => {
    setMyComment(e.target.value);
  };

  const handleCommentSubmit = async (e, postId) => {
    e.preventDefault();
    const url = `${URL_POST + postId}/comment`;
    const comment = {
      postId: postId,
      comments: [],
      text: myComment,
      user: {
        id: "paultor",
        avatar: "/resources/avatars/7bc068d0-579e-11ed-a31c-29f1e041acd7.png",
      },
    };

    try {
      const commentStatus = await postComment(url,comment);
      setMyComment("");
      
      if (commentStatus.statusText === "OK") {
      return comment;
      }

    } catch (error) {
      console.log("Post Request Error", error);
    }
  };

  return (
    <CommentContext.Provider
      value={{ myComment, handleComment, handleCommentSubmit }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useCommentContext = () => {
  return useContext(CommentContext);
};