import React, {useState} from "react";
import { useFeedAndPostsContext } from "../context/FeedAndPostsContext";
import styled from "styled-components";
import { useSinglePostContext } from "../context/SinglePostContext";

const CommentInput = () => {
  const { focusRef } = useFeedAndPostsContext();
  const [myComment, setMyComment] = useState("");

  const { isSinglePostOpen } = useSinglePostContext();

  const handleComment = (e) => {
    setMyComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setMyComment("");
  };

  return (
    <CommentInputWrapper
      comment={myComment}
      isSinglePostOpen={isSinglePostOpen}
    >
      <form className="form-container" onSubmit={handleCommentSubmit}>
        <textarea
          ref={focusRef}
          className="comment-area"
          placeholder="Add a comment..."
          value={myComment}
          onChange={handleComment}
        />
        <button className="post-btn" disabled={!myComment}>
          Post
        </button>
      </form>
    </CommentInputWrapper>
  );
};

export default CommentInput;

const CommentInputWrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 15px 0 15px;
  border-top: 1px solid var(--grey);
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    width: 100%;
    height: 20px;
    display: flex;
  }

  .comment-area {
    width: 100%;
    resize: none;
    outline: none;
    overflow: hidden;
    font-family: "Poppins", sans-serif;
  }

  .post-btn:disabled {
    color: var(--post_btn_disabled);
    cursor: context-menu;
  }

  .post-btn {
    margin-left: 10px;
    font-size: var(--fs_regular);
    font-weight: var(--bold);
    color: var(--post_btn);
    font-family: "Poppins", sans-serif;
  }

  .post-btn:hover {
    color: ${(props) => props.comment && "var(--hover_post)"};
  }

  @media screen and (max-width: 550px) {
    border-top: ${(props)=> props.isSinglePostOpen ? "1px solid var(--grey)" : "none"};
  }
`;
