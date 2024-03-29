import React, {useEffect, useState} from 'react'
import { useLikesContext } from "../context/LikesContext";
import styled from 'styled-components'
import * as HiIcons from "react-icons/hi";
import ProfileAvatar from './ProfileAvatar';
import { UsernameOnComments } from './UsernameOnComments';

const SingleComment = ({ comment, postInfos }) => {
  const {
    likeComment,
    likedCommentOnStorage,
    removeLikeOnComment,
    getLikedCommentOnStorage,
  } = useLikesContext();

  const [isLikedCommentOnPostOpen, setIsLikedCommentOnPostOpen] = useState(false);

  const handleLikeCommentOnPostOpen = ()=> {
    const hasLikedCommentOnStorage = getLikedCommentOnStorage(comment);

    if (!hasLikedCommentOnStorage) {
      likeComment(comment);
      setIsLikedCommentOnPostOpen(true);
      return;
    }
    removeLikeOnComment(comment);
    setIsLikedCommentOnPostOpen(false);
  }

  useEffect(() => {
    if (likedCommentOnStorage.length) {
      setIsLikedCommentOnPostOpen(getLikedCommentOnStorage(comment));
    }
    //eslint-disable-next-line
  },[])

  return (
    comment.text && (
      <SingleCommentWrapper>
        <ProfileAvatar url={comment.user?.avatar} />
        <div className="comments-info">
          <p className="normal-text">
            <UsernameOnComments user={comment.user} postId={comment.postId} />
            {comment.text}
          </p>
          {postInfos?.userId !== comment.user.id ? (
            <button onClick={handleLikeCommentOnPostOpen}>
              {isLikedCommentOnPostOpen ? (
                <HiIcons.HiHeart className="interaction-icons like-btn like-btn-color" />
              ) : (
                <HiIcons.HiOutlineHeart className="interaction-icons like-btn" />
              )}
            </button>
          ) : (
            ""
          )}
        </div>
      </SingleCommentWrapper>
    )
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

  .comments-info {
    width: 88%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 10px;
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
