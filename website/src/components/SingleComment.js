import React from 'react'
import { useLikesContext } from "../context/LikesContext";
import styled from 'styled-components'
import * as HiIcons from "react-icons/hi";

import ProfileAvatar from './ProfileAvatar';

const SingleComment = ({ comment}) => {
  const { isLikedComment, handleLikeComment } = useLikesContext();

  return (
    <SingleCommentWrapper>
      <ProfileAvatar url={comment.user.avatar} />
      <div className="comments-info">
        <p className="normal-text user-comment">
          <span className="text-bold name-user">{comment.user.id}</span>
          {comment.text}
        </p>
         <button onClick={handleLikeComment}>
          {isLikedComment ? (
            <HiIcons.HiHeart className="interaction-icons like-btn like-btn-color" />
          ) : (
            <HiIcons.HiOutlineHeart className="interaction-icons like-btn" />
          )}
        </button>
      </div>
    </SingleCommentWrapper>
  );
}

export default SingleComment

const SingleCommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
  z-index: 50;

  .comments-info {
    width: 88%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .like-btn {
    font-size: 12.8px;
    position: relative;
    margin-left: 30px;
    top: 5px;
  }

  .like-btn-color {
    color: var(--heart);
  }
`;
