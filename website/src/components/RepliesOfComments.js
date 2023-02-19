import React from "react";
import SingleComment from "./SingleComment";

const RepliesOfComments = ({ comment }) => {
  return (
    comment.comments.length &&
    comment.comments.map((reply, index) => {
      return <SingleComment comment={reply} key={index} />;
    })
  );
};

export default RepliesOfComments;
