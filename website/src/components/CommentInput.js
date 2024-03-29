import React from "react";
import { useFeedAndPostsContext } from "../context/FeedAndPostsContext";
import styled from "styled-components";
import { useSinglePostContext } from "../context/SinglePostContext";
import { useCommentContext } from "../context/CommentContext";

const CommentInput = ({
  postInfos,
  setUpdatebleComments,
  updatebleComments,
  setUpdatebleCommentsCount,
  updatebleCommentsCount,
}) => {
  const { focusRef } = useFeedAndPostsContext();
  const { isSinglePostOpen } = useSinglePostContext();
  const { handleCommentSubmit, handleComment, myComment } = useCommentContext();

  const enterComment = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.target.form.requestSubmit();
    }
  }

  const submitComment = async (e) => {
    const singleComment = await handleCommentSubmit(e, postInfos.id);
    setUpdatebleComments([...updatebleComments, singleComment]);
    //setUpdatebleCommentsCount(updatebleCommentsCount + 1);
  };

  return (
    <CommentInputWrapper
      comment={myComment}
      isSinglePostOpen={isSinglePostOpen}
    >
      <form className="form-container" onSubmit={submitComment}>
        <textarea
          ref={focusRef}
          className="comment-area"
          placeholder="Add a comment..."
          value={myComment}
          onChange={handleComment}
          onKeyDown={enterComment}
        />
        <button className="post-btn" disabled={!myComment} type="submit">
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
    overflow: visible;
    font-family: "Poppins", sans-serif;
    height: 32px;
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
    border-top: ${(props) =>
      props.isSinglePostOpen ? "1px solid var(--grey)" : "none"};
  }
`;
