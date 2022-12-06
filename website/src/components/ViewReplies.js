import React, { useState } from "react";
import styled from "styled-components";
import RepliesOfComments from "./RepliesOfComments";

const ViewReplies = ({ comment }) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const handleReplies = () => {
    setIsReplyOpen(!isReplyOpen);
  };

  return (
    <ViewRepliesWrapper>
      <button className="view-replies-btn" onClick={handleReplies}>
        — &nbsp;&nbsp;&nbsp; {isReplyOpen ? "Hide replies" : `View replies (${comment.comments.length})`}
      </button>
      {isReplyOpen ? <RepliesOfComments comment={comment}/> : ""}
    </ViewRepliesWrapper>
  );
};

export default ViewReplies;

const ViewRepliesWrapper = styled.div`
  width: 87.5%;
  margin-left: 50px;
  margin-top: -10px;
  margin-bottom: 10px;

  .view-replies-btn {
    font-weight: var(--bold);
    color: var(--dark_grey);
    font-size: 11px;
  }
`;
