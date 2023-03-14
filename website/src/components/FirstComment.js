import styled from "styled-components";
import { UsernameOnComments } from "./UsernameOnComments";

const FirstComment = ({ previewComments }) => {
  return previewComments.length
    ? previewComments.slice(0, 3).map((comment, index) => {
        return (
          <FirstCommentWrapper key={index}>
            <div>
              <UsernameOnComments user={comment.user} postId={comment.postId} />
              <span className="normal-text">{comment.text}</span>
            </div>
          </FirstCommentWrapper>
        );
      })
    : "";
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
