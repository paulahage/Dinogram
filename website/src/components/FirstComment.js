import { useLikesContext } from "../context/LikesContext";
import styled from "styled-components";
import * as HiIcons from "react-icons/hi";
import { UsernameOnComments } from "./UsernameOnComments";

const FirstComment = ({ comments }) => {
  const { isLikedComment, handleLikeComment } = useLikesContext();

  return comments.map((comment, index) => {
    return (
      <FirstCommentWrapper key={index}>
        <div>
          <UsernameOnComments user={comment.user} postId={comment.postId} />
          <span className="normal-text">{comment.text}</span>
        </div>
        <button onClick={handleLikeComment}>
          {isLikedComment ? (
            <HiIcons.HiHeart className="interaction-icons like-btn like-btn-color" />
          ) : (
            <HiIcons.HiOutlineHeart className="interaction-icons like-btn" />
          )}
        </button>
      </FirstCommentWrapper>
    );
  });
};

export default FirstComment;

const FirstCommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 3px;

  .like-btn {
    font-size: 12.8px;
    position: relative;
    margin-left: 5px;
  }

  .like-btn-color {
    color: var(--heart);
  }
`;
