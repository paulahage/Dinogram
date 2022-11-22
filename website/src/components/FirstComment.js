import { useLikesContext } from "../context/LikesContext";
import styled from "styled-components";
import * as HiIcons from "react-icons/hi";

const FirstComment = ({ comments }) => {
  const { isLikedComment, handleLikeComment } = useLikesContext();

  return comments.map((comment, index) => {
    return <FirstCommentWrapper key={index}>
      <div>
        <span className="text-bold name-user">{comment.user.id}</span>
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
  })
};

export default FirstComment;

const FirstCommentWrapper = styled.div`
  width: 440px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .like-btn {
    font-size: 12.8px;
  }

  .like-btn-color {
    color: var(--heart);
  }
`;